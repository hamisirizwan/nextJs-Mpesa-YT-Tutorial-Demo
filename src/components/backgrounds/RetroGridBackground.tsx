import RetroGrid from "@/components/magicui/retro-grid";
import { ReactNode } from "react";

export function RetroGridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-background">
      <div className="z-10">{children}</div>
      <RetroGrid />
    </div>
  );
}
