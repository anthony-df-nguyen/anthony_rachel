const navigation: {
  name: string;
  href: string;
  external?: boolean;
}[] = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/#our_story" },
  { name: "Schedule", href: "/#schedule" },
  {
    name: "RSVP",
    href: "https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp",
    external: true,
  },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
];

export { navigation };
