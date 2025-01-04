import { MdCelebration } from "react-icons/md";
import { FaChurch, FaGift } from "react-icons/fa6";
type Event = {
  time: string;
  title: string;
  location: string;
  description?: string;
  icon?: React.ReactNode;
  link?: string;
};
const events: Event[] = [
  {
    time: "9 am",
    title: "Tea Ceremony",
    location: "Rachel's House",
    description: `
        A Vietnamese wedding tea ceremony is a cherished tradition that honors the union of two families. 
        During the ceremony, the couple serves tea to their elders as a gesture of respect and gratitude, 
        symbolizing the blending of their families and the blessings of their ancestors. 
        In return, the elders offer advice, gifts, and well-wishes for the couple’s future.
      `,
    icon: <FaGift className="mx-auto h-8 w-8 text-gray-400" />,
  },
  {
    time: "12 pm",
    title: "The Church",
    location: "La Purisima Catholic Church",
    description: `
        The church ceremony at La Purisima Catholic Church will be a sacred and heartfelt celebration of love and commitment. 
        Surrounded by the beauty and tranquility of the church, we will exchange vows in the presence of our loved ones 
        and receive blessings for our marriage. This meaningful sacrament will mark the beginning of our journey 
        together as husband and wife, rooted in faith, love, and unity.
      `,
    icon: <FaChurch className="mx-auto h-10 w-10 text-gray-400" />,
    link: "https://g.co/kgs/1CXz3Nn",
  },
  {
    time: "6 pm",
    title: "The Reception",
    location: "RSVP for Details",
    description: `
        Our reception will be a joyful celebration of our marriage, shared with our closest family and friends. 
        Set in a warm and festive atmosphere, the evening will include delicious food, heartfelt toasts, and plenty of dancing. 
        As space is limited, this event is RSVP only, ensuring we can create a meaningful and unforgettable experience for everyone in attendance. 
        We can’t wait to celebrate this special moment with those who mean the most to us!
      `,
    icon: <MdCelebration className="mx-auto h-10 w-10 text-gray-400" />,
    link: "https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp",
  },
  // {
  //   time: "12 am",
  //   title: "The After Party",
  //   location: "Anthony's House",
  //   description: `
  //       Our reception will be a joyful celebration of our marriage, shared with our closest family and friends. 
  //       Set in a warm and festive atmosphere, the evening will include delicious food, heartfelt toasts, and plenty of dancing. 
  //       As space is limited, this event is RSVP only, ensuring we can create a meaningful and unforgettable experience for everyone in attendance. 
  //       We can’t wait to celebrate this special moment with those who mean the most to us!
  //     `,
  //   icon: <MdCelebration className="mx-auto h-10 w-10 text-gray-400" />,
  // },
];

export default events;
