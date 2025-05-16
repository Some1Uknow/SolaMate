import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-md hover:shadow-destructive/20 hover:-translate-y-0.5",
        outline:
          "border border-input bg-background/50 backdrop-blur-sm hover:bg-accent/10 hover:text-accent-foreground hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-md hover:shadow-secondary/20 hover:-translate-y-0.5",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-peach-400 to-red-500 text-white hover:shadow-lg hover:shadow-red-400/20 transition-all hover:-translate-y-0.5 border border-white/10",
        romantic: "bg-gradient-to-br from-peach-400 via-peach-500 to-red-500 text-white hover:shadow-lg hover:shadow-red-400/20 transition-all hover:-translate-y-0.5 border border-white/10",
      },      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 py-1.5",
        lg: "h-11 px-8 py-2.5 text-[15px]",
        xl: "h-12 px-10 py-3 text-base",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-lg",
        md: "rounded-xl",
        full: "rounded-full",
        sm: "rounded-md",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
