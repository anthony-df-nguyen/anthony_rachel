"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { TeamMember } from "data/images/teamMembers";

type Props = {
  team: TeamMember[];
  cols: number; // Max columns at lg breakpoint
};

export default function TeamMembers({ team, cols }: Props): JSX.Element {
  const lgColsClass =
    {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
      5: "md:grid-cols-5",
      6: "md:grid-cols-6",
    }[cols] || "lg:grid-cols-1"; // Fallback to 1 if invalid

  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8">
      <ul
        role="list"
        className={`mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 lg:mx-0 lg:max-w-none ${lgColsClass}`}
      >
        {team.map((person,i) => (
          <li key={person.name + i}>
            <div className="relative aspect-[1/1] w-full">
              <Image
                alt={`${person.name}'s profile picture`}
                src={person.imageUrl}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
              />
            </div>
            <div className="text-center">
              {" "}
              <h3 className="titles mt-6 text-2xl font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-md text-gray-600">{person.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
