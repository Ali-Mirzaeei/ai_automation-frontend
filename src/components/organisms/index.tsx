import clsx from "clsx";
import React from "react";
import Header from "../modules/Header";
interface PageLayoutProps {
  className?: string;
  children?: React.ReactNode;
  isAuthPage?: boolean;
  isChatPage?: boolean;
}

function PageLayout({
  children,
  className,
  isAuthPage,
  isChatPage,
}: PageLayoutProps) {
  return (
    <div
      className={clsx(
        "bg-slate-900 text-white font-sans flex flex-col min-h-screen",
        className
      )}
    >
      <Header isAuthPage={isAuthPage} isChatPage={isChatPage} />
      {children}
    </div>
  );
}

export default PageLayout;
