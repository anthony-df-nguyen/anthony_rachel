// Define the structure of a team member using a TypeScript type
export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

// Team data
export const boys: TeamMember[] = [
  {
    name: "Kiet",
    role: "Don't let him eat spicy food",
    imageUrl: "/images/kiet.jpg",
  },
  {
    name: "John",
    role: "Afraid to shoot 3s",
    imageUrl: "/images/john.jpg",
  },
  {
    name: "Aaron",
    role: "Just a chill guy",
    imageUrl: "/images/aaron.jpg",
  },
  {
    name: "Josh",
    role: "Pervert",
    imageUrl: "/images/josh.jpg",
  },
  {
    name: "Andrei",
    role: "Hooker",
    imageUrl: "/images/andrei.jpg",
  },
  {
    name: "Mark",
    role: "Big Daddy",
    imageUrl: "/images/mark.jpg",
  },
];

export const couple: TeamMember[] = [
  {
    name: "Rachel",
    role: "The Bride",
    imageUrl: "/images/wedding_party/rachel.jpg",
  },
  {
    name: "Anthony",
    role: "The Groom",
    imageUrl: "/images/wedding_party/anthony_2.jpg",
  },
];

export const groomsmen: TeamMember[] = [
  {
    name: "Christine",
    role: "Best Woman",
    imageUrl: "/images/wedding_party/christine_n_2.jpg",
  },
  {
    name: "Vinh",
    role: "Best Man",
    imageUrl: "/images/wedding_party/vinh.jpg",
  },

  {
    name: "Andy",
    role: "Groomsman",
    imageUrl: "/images/wedding_party/andy2.jpg",
  },
  {
    name: "Ben",
    role: "Groomsman",
    imageUrl: "/images/wedding_party/ben.jpg",
  },
  {
    name: "Kenny",
    role: "Groomsman",
    imageUrl: "/images/wedding_party/kenny.jpg",
  },

  {
    name: "Spencer",
    role: "Groomsman",
    imageUrl: "/images/wedding_party/spencer_2.jpg",
  },
];

export const bridesmaids: TeamMember[] = [
  {
    name: "Ashley",
    role: "Maid of Honor",
    imageUrl: "/images/wedding_party/ashley.jpg",
  },
  {
    name: "Josephine",
    role: "Matron of Honor",
    imageUrl: "/images/wedding_party/josephine.jpg",
  },
  {
    name: "Christine",
    role: "Bridesmaid",
    imageUrl: "/images/wedding_party/christine_p.jpg",
  },

  {
    name: "Kathleen",
    role: "Bridesmaid",
    imageUrl: "/images/wedding_party/kathleen.jpg",
  },
  {
    name: "Lili",
    role: "Bridesmaid",
    imageUrl: "/images/wedding_party/lili.jpg",
  },
  {
    name: "Sally",
    role: "Bridesmaid",
    imageUrl: "/images/wedding_party/sally.jpeg",
  },
];
