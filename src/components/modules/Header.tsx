"use client";

import { RoutesName } from "@/core/constants/routes";
import Link from "next/link";
import React from "react";
import SunIcon from "../atom/icons/sunIcon";
import { useTheme } from "@/core/hooks/useTheme";

interface HeaderProps {
  isAuthPage?: boolean;
  isChatPage?: boolean;
}
const Header = ({ isAuthPage = false, isChatPage = false }: HeaderProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href={RoutesName.landing}
          className="flex items-center gap-2 cursor-pointer"
        >
          <svg
            className="w-8 h-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-xl font-bold">Flowzy AI</span>
        </Link>
        {isChatPage && (
          <div
            onClick={toggleTheme}
            className="p-3 rounded-full bg-surface border-textPrimary border"
          >
            <SunIcon className="w-5 h-5 text-textPrimary" />
          </div>
        )}
        {!isAuthPage && !isChatPage && (
          <nav className="flex items-center gap-4">
            <Link
              href={RoutesName.authentication}
              className="text-slate-300 hover:text-white transition-colors duration-300"
            >
              Sign In
            </Link>
            <Link
              href={RoutesName.authentication}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Sign Up
            </Link>
          </nav>
        )}
      </div>
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </header>
  );
};

export default Header;
