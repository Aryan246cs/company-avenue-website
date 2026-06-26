"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-800 shadow-sm hover:shadow-md",
  secondary:
    "bg-secondary text-white hover:bg-primary-700 shadow-sm hover:shadow-md",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-primary/5",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-sm hover:shadow-md",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      loading,
      icon,
      iconPosition = "right",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-heading font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    const content = (
      <>
        {loading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {icon && iconPosition === "left" && !loading && icon}
        {children}
        {icon && iconPosition === "right" && !loading && icon}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
