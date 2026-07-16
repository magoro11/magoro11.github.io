import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]/40 disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "text-white shadow-sm hover:opacity-90 active:scale-[0.98]",
        outline:
          "border border-[--border-2] bg-transparent text-[--text-secondary] hover:bg-[--surface] hover:text-[--text-primary] hover:border-[--accent]",
        ghost:
          "text-[--text-secondary] hover:bg-[--surface] hover:text-[--text-primary]",
        glass:
          "bg-[--surface]/60 backdrop-blur-md border border-[--border-2] text-[--text-secondary] hover:bg-[--surface] hover:text-[--text-primary]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm:      "h-8  px-3 text-xs",
        lg:      "h-11 px-7 text-base",
        icon:    "h-9  w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isDefault = !variant || variant === "default";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        style={
          isDefault
            ? { background: "linear-gradient(135deg, #7c6af7, #6366f1)", ...style }
            : style
        }
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
