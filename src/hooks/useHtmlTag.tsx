import React, { FC, ReactNode } from "react";

type HtmlTagProps = {
  tag: HtmlTagName;
  className?: string;
  children?: ReactNode;
};

const HtmlTag: FC<HtmlTagProps> = ({ tag, className, children }) => {
  return (
    <>
      <span className="text-[#7aa2f7]">&lt;</span>
      <span className="text-[#2667ca]">{tag}</span>
      {className && (
        <>
          <span className="text-[#7cdcfe]"> class</span>
          <span className="text-white">=</span>
          <span className="text-orange-400">"</span>
          <span className="text-orange-400">{className}</span>
          <span className="text-orange-400">"</span>
        </>
      )}
      <span className="text-[#7aa2f7]">&gt;</span>
      {children && <span className="text-white">{children}</span>}
      <span className="text-[#7aa2f7]">&lt;/</span>
      <span className="text-[#2667ca]">{tag}</span>
      <span className="text-[#7aa2f7]">&gt;</span>
    </>
  );
};

export default HtmlTag;
