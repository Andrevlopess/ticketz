"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

interface SeparatorProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    "orientation"
  > {
  variant?: "dot" | "line";
  orientation?: "horizontal" | (SeparatorProps['variant'] extends 'dot' ? never : "vertical");
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      variant = "line",
      ...props
    },
    ref
  ) => {
    const separatorVariants = cva("shrink-0 bg-border", {
      variants: {
        variant: {
          dot: "rounded-full h-2 w-2",
          line:
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        },
      },
      defaultVariants: {
        variant: "line",
      },
    });

    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn("", separatorVariants({ variant }), className)}
        {...props}
      ></SeparatorPrimitive.Root>
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

// const Separator = React.forwardRef<
//   React.ElementRef<typeof SeparatorPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
// >(
//   (
//     { className, orientation = "horizontal", decorative = true, ...props },
//     ref
//   ) => (
//     <SeparatorPrimitive.Root
//       ref={ref}
//       decorative={decorative}
//       orientation={orientation}
//       className={cn(
//         "shrink-0 bg-border",
//         orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
//         className
//       )}
//       {...props}
//     />
//   )
// )
// Separator.displayName = SeparatorPrimitive.Root.displayName

// export { Separator }
