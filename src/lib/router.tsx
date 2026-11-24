import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import { normalizePath, type SitePath } from "@/lib/routes";

type RouterValue = {
  pathname: SitePath;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterValue | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState<SitePath>(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const next = normalizePath(to);
    if (normalizePath(window.location.pathname) !== next) {
      window.history.pushState({}, "", next);
    }
    setPathname(next);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const value = useMemo(() => ({ pathname, navigate }), [pathname, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterValue {
  const value = useContext(RouterContext);
  if (!value) {
    throw new Error("useRouter must be used inside a RouterProvider");
  }
  return value;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
};

export function Link({ to, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  return (
    <a
      {...rest}
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
    />
  );
}
