import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 15 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const maxMeteorPosition = screenWidth - 120;

    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * maxMeteorPosition) + "px",
      animationDelay: Math.random() * 2 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 15 + 5) + "s",
      maxWidth: `${maxMeteorPosition}`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
      <>
        {meteorStyles.map((style, idx) => (
            <span
                key={idx}
                className={cn(
                    "pointer-events-none absolute top-1/2 size-0.8 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff20]"
                )}
                style={style}
            >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[30px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
        ))}
      </>
  );
};

export default Meteors;
