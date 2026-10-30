import { useLayoutEffect, useRef } from "react";

export function BrandText({
  label,
  maxWidth,
  ...position
}: {
  label: string;
  maxWidth: number;
  x: number;
  y: number;
  fontSize: number;
}) {
  const text = useRef<SVGTextElement>(null);
  const display = label.trim() || "YOUR BRAND";
  useLayoutEffect(() => {
    const node = text.current;
    if (!node) return;
    node.removeAttribute("textLength");
    node.removeAttribute("lengthAdjust");
    if (node.getComputedTextLength() > maxWidth) {
      node.setAttribute("textLength", String(maxWidth));
      node.setAttribute("lengthAdjust", "spacingAndGlyphs");
    }
  }, [display, maxWidth]);
  return (
    <text
      ref={text}
      className="live-brand"
      fontWeight="700"
      data-max-width={maxWidth}
      {...position}
    >
      {display}
    </text>
  );
}
