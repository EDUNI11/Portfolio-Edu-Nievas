import React, { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
    href?: string;
}

const ShimmerButton = ({
       shimmerColor = "var(--accent)",
       shimmerSize = "0.1em",
       shimmerDuration = "3s",
       borderRadius = "100em",
       background = "linear-gradient(to left, var(--primary), var(--secondary))",
       className,
       children,
       href,
       ...props
   }: ShimmerButtonProps) => {
    return (
        <a
            style={
                {
                    "--spread": "90deg",
                    "--shimmer-color": shimmerColor,
                    "--radius": borderRadius,
                    "--speed": shimmerDuration,
                    "--cut": shimmerSize,
                    "--bg": background,
                } as CSSProperties
            }
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-2 py-1 text-[--principal-text-color] [background:var(--bg)] [border-radius:var(--radius)]",
                "transform-gpu inline-flex gap-x-2 items-center justify-center transition-transform duration-300 ease-in-out active:translate-y-px hover:saturate-150",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "-z-30 blur-[2px]",
                    "absolute inset-0 overflow-visible [container-type:size]"
                )}
            >
                {/* spark */}
                <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                    {/* spark before */}
                    <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                </div>
            </div>
            {children}

            <div
                className={cn(
                    "insert-0 absolute size-full",
                    "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
                    "transform-gpu transition-all duration-300 ease-in-out",
                    "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
                    "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
                )}
            />

            {/* backdrop */}
            <div
                className={cn(
                    "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
                )}
            />
        </a>
    );
};

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
