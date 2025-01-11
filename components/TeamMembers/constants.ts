// Define the structure of a team member using a TypeScript type
export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

// Team data
export const team: TeamMember[] = [
  {
    name: "Kiet",
    role: "Don't let him eat spicy food",
    imageUrl:
      "/images/kiet.jpg",
  },
  {
    name: "John",
    role: "Afraid to shoot 3s",
    imageUrl:
      "/images/john.jpg",
  },
  {
    name: "Aaron",
    role: "Just a chill guy",
    imageUrl:
      "/images/aaron.jpg",
  },
  {
    name: "Josh",
    role: "Pervert",
    imageUrl:
      "/images/josh.jpg",
  },
  {
    name: "Andrei",
    role: "Hooker",
    imageUrl:
      "/images/andrei.jpg",
  }
  // Add more team members as needed...
];