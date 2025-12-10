import Image from "next/image";
import Link from "next/link";
import { type ElementType, type ComponentPropsWithoutRef, type ReactNode } from "react";

export interface PortraitCardProps {
  name: string;
  subtitle?: string;
  src?: string;
  href?: string;
  alt?: string;
  className?: string;
  disableHover?: boolean; // New prop
}

type BaseCardProps<E extends ElementType = "article"> = {
  as?: E;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<
  ComponentPropsWithoutRef<E>,
  "as" | "children" | "className" | "href" | "target" | "rel"
>;

function CardRoot<E extends ElementType = "article">({
  as = "article" as E,
  href,
  className = "",
  children,
  ...rest
}: BaseCardProps<E>) {
  const Cmp = href ? Link : as;
  
  const props = href ? { href, ...rest } : { ...rest };

  return (
    // @ts-expect-error - is safe
    <Cmp
      {...props}
      className={[
        "block rounded-2xl border border-slate-200 bg-white shadow-sm", // Removed base hover classes
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Cmp>
  );
}

// --- Main Component ---

export default function PortraitCard({
  name,
  subtitle,
  src,
  href,
  alt,
  className,
  disableHover = false, // Default to false so existing cards keep hover
}: PortraitCardProps) {
  
  // Conditional classes for hover effects
  const cardHoverClass = disableHover ? "" : "transition-all hover:shadow-md group";
  const imageHoverClass = disableHover ? "" : "transition-transform duration-500 group-hover:scale-105";
  const textHoverClass = disableHover ? "" : "group-hover:text-[var(--deep-teal)] transition-colors";

  return (
    <CardRoot href={href} className={`flex flex-col overflow-hidden ${cardHoverClass} ${className || ""}`}>
      {src ? (
        <div className="relative w-full aspect-[4/5] bg-white">
          <Image
            src={src}
            alt={alt ?? name}
            fill
            className={`object-cover ${imageHoverClass}`}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[4/5] bg-slate-100 flex items-center justify-center">
          <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">
            No Photo
          </span>
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <h2 className={`text-sm font-bold text-[var(--midnight-blue)] line-clamp-2 leading-tight ${textHoverClass}`}>
          {name}
        </h2>
        {subtitle && (
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </CardRoot>
  );
}