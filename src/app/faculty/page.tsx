import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type BaseCardProps<E extends ElementType = "article"> = {
  as?: E;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "children" | "className" | "href" | "target" | "rel">;

function CardRoot<E extends ElementType = "article">({
  as = "article" as E,
  href,
  external,
  className = "",
  children,
  ...rest
}: BaseCardProps<E>) {
  const Cmp = href ? "a" : as;
  const attrs = href
    ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <Cmp
      {...attrs}
      {...rest}
      className={[
        "block rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </Cmp>
  );
}

export default CardRoot;