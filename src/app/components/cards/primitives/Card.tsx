import type { ElementType, ReactNode } from "react";

type BaseCardProps = {
  as?: ElementType;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

function CardRoot({
  as = "article",
  href,
  external,
  className = "",
  children,
}: BaseCardProps) {
  const Cmp: ElementType = (href ? "a" : as) as ElementType;
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
      className={[
        "group block overflow-hidden rounded-2xl",
        "bg-transparent",
        "shadow-sm hover:shadow-md",
        "transition-all duration-150 focus:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)]",
        className,
      ].join(" ")}
    >
      {children}
    </Cmp>
  );
}

type MediaProps = {
  children: ReactNode;      // pass your <Image/> or <img/>
  ratio?: "16/9" | "4/3" | "1/1" | "4/5"; // defaults to 16/9
  className?: string;
};
function CardMedia({ children, ratio = "16/9", className = "" }: MediaProps) {
  const style = { aspectRatio: ratio.replace("/", " / ") };
  return (
    <div className={["relative w-full overflow-hidden", className].join(" ")} style={style}>
      {children}
    </div>
  );
}

type BodyProps = { children: ReactNode; className?: string };
function CardBody({ children, className = "" }: BodyProps) {
  return <div className={["p-4 bg-white text-black", className].join(" ")}>{children}</div>;
}

type TextProps = { children: ReactNode; className?: string; as?: ElementType };
function CardTitle({ children, className = "", as: T = "h3" }: TextProps) {
  const TitleCmp = T as ElementType;
  return <TitleCmp className={["text-lg font-semibold", className].join(" ")}>{children}</TitleCmp>;
}
function CardMeta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={["mt-1 text-sm text-black/70", className].join(" ")}>{children}</p>;
}
function CardSummary({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={["mt-2 text-black/80 line-clamp-2", className].join(" ")}>{children}</p>;
}

const Card = Object.assign(CardRoot, {
  Media: CardMedia,
  Body: CardBody,
  Title: CardTitle,
  Meta: CardMeta,
  Summary: CardSummary,
});

export default Card;