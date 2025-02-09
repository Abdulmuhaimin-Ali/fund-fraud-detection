import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles =
      "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005316]"
    const variantStyles = {
      default: "bg-[#005316] text-white hover:bg-[#005316]/90",
      outline: "border border-[#005316] text-[#005316] hover:bg-[#005316]/10",
    }

    return <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

