const navLinks: {
  name: string;
  href: string;
  external?: boolean;
}[] = [
  { name: "Home", href: "/" },
  { name: "Schedule", href: "/#schedule" },
  { name: "Our Story", href: "/#our_story" },
  { name: "Gallery", href: "/gallery" },
  { name: "Wedding Party", href: "/wedding_party"},
  { name: "FAQ", href: "/faq" },
  {
    name: "RSVP",
    href: "https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp",
    external: true,
  },
];

export { navLinks };
