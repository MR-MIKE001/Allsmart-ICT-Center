// ProfileCard.tsx
import React, { useState } from "react";
import chairman from "../../assets/team_chairman.webp"
import human from "../../assets/team_human.webp"
import managing from "../../assets/team_managing.webp"
import marketing from "../../assets/team_marketing.webp"
import operating from "../../assets/team_operating.webp"
import security from "../../assets/team_security.webp"

interface ProfileCardProps {
  image?: string;
  name: string;
  role: string;
  description: string;
  shortLimit?: number;
}

export function TeamCard({
  image,
  name,
  role,
  description,
  shortLimit = 120,
}: ProfileCardProps) {
  const [expanded, setExpanded] = useState(false);

  const isLong = description.length > shortLimit;
  const displayedText =
    isLong && !expanded
      ? description.slice(0, shortLimit).trimEnd() + "…"
      : description;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="bg-[#000407] border border-[#021d47] rounded-2xl overflow-hidden flex flex-col hover:border-gray-200 transition-colors">
      {/* Image / Avatar */}
      {image ? (
        <img
          src={image==="chairman" ? chairman : image==="human" ? human : image==="managing" ? managing : image==="marketing" ? marketing : image==="operating" ? operating : security}
          alt={name}
          className="w-full object-cover"
        />
      ) : (
        <div className="w-full aspect-[4/3] bg-gray-50 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-800 font-medium text-xl">
            {initials}
          </div>
        </div>
      )}

      {/* Body */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        {/* Role badge */}
        <span className="text-[11px] font-medium tracking-widest uppercase px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 w-fit">
          {role}
        </span>

        {/* Name */}
        <p className="text-base font-medium text-gray-500">{name}</p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">{displayedText}</p>

        {/* See more / less */}
        {isLong && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="text-xs font-medium text-blue-600 hover:opacity-75 transition-opacity flex items-center gap-1 w-fit mt-0.5"
          >
            {expanded ? "See less" : "See more"}
            <svg
              className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
}