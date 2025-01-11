"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { team } from "./constants";

/**
 * Example component displaying a team section with members' profiles.
 *
 * @returns {JSX.Element} The rendered team section.
 */

export default function TeamMembers(): JSX.Element {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {team.map((person) => (
          <li key={person.name}>
            {/* Using Next.js Image for optimized loading */}
            <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden">
              <Image
                alt={`${person.name}'s profile picture`}
                src={person.imageUrl}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
              />
            </div>
            <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
              {person.name}
            </h3>
            <p className="text-base/7 text-gray-600">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
