import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-accent-fg hover:shadow-glow hover:brightness-110 disabled:bg-fg-muted disabled:text-bg",
  secondary:
    "border border-line bg-transparent text-fg hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-fg hover:text-accent",
} as const;

type ButtonVariant = keyof typeof variants;

type CommonProps = {
  variant?: ButtonVariant;
  loading?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonClassName(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-6 text-sm font-medium tracking-wide transition-[color,background-color,box-shadow,transform,border-color] duration-200 ease-premium",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );
}

function ButtonLabel({
  loading,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) {
  return (
    <>
      {loading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </>
  );
}

function ButtonLink({
  variant = "primary",
  loading = false,
  className,
  children,
  href,
}: ButtonAsLink) {
  return (
    <Link
      href={href}
      className={buttonClassName(variant, className)}
      aria-busy={loading}
    >
      <ButtonLabel loading={loading}>{children}</ButtonLabel>
    </Link>
  );
}

function ButtonNative({
  variant = "primary",
  loading = false,
  className,
  children,
  type = "button",
  disabled,
  href,
  ...rest
}: ButtonAsButton) {
  void href;

  return (
    <button
      type={type}
      className={buttonClassName(variant, className)}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      <ButtonLabel loading={loading}>{children}</ButtonLabel>
    </button>
  );
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    return <ButtonLink {...props} />;
  }

  return <ButtonNative {...props} />;
}
