"use client"

import { Newspaper, Play, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PressBoxProps {
  outlet: string;
  title: string;
  href: string;
  type: "news" | "tv" | "magazine" | "link";
  className?: string;
  imageSrc?: string;
}

const iconMap = {
  news: Newspaper,
  tv: Play,
  magazine: FileText,
  link: ArrowRight,
};

export function PressBox({ outlet, title, href, type, className, imageSrc }: PressBoxProps) {
  const Icon = iconMap[type];

  if (type === "link") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform aspect-[16/9]",
          className
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-12 w-12 text-white group-hover:translate-x-2 transition-transform duration-300" />
        </div>
        <div className="absolute inset-0 flex items-end p-6">
          <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
            {title}
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform aspect-[16/9]",
        className
      )}
    >
      {/* Image container with overlay */}
      <div className="absolute inset-0 w-full h-full">
        {imageSrc ? (
          <>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            {/* Image */}
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200" />
        )}
      </div>
      
      {/* Content area */}
      <div className="relative z-30 flex flex-col justify-end h-full p-6">
        <div className="flex items-start gap-4">
          <div className="text-white shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="text-white font-medium">{outlet}</p>
            <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
} 