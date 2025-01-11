import { ReactNode } from "react";

type FAQs = {
  question: string;
  answer: string | ReactNode;
};

const faqs: FAQs[] = [
  {
    question: "What is the dress code?",
    answer: "The dress code is [formal/semi-formal/cocktail/etc.].",
  },
  {
    question: "Are kids invited?",
    answer: "Due to limited space, at this time we can only extend invites to kids to our closest family and friends.",
  },
  {
    question: "How do I RSVP?",
    answer: (
      <>
        Please RSVP by [RSVP deadline] using{" "}
        <a
          className="underline"
          href="https://www.zola.com/wedding/anthonyandrachelseptember20/rsvp"
        >
          our Zola Link
        </a>
      </>
    ),
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "If your invite includes a plus-one, we’d love for them to join us! However, we kindly ask that guests refrain from bringing additional attendees unexpectedly. Thank you for your understanding!",
  },
  {
    question: "Where is your gift registry?",
    answer:
      "We don't have a gift registry, but we will have an envelope box at the reception for cards and gifts. Your presence at our wedding is the greatest gift of all!",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "You are welcome to take photos and vide throughout the day! However, please be mindful of our professional photographers and videographers. Avoid blocking their view or using flash, as this could interfere with capturing our special moments. Thank you for your understanding!",
  },
  {
    question: "Is there a wedding hashtag?",
    answer:
      "Yes, our wedding hashtag is [#hashtag]. Share your photos using the tag!",
  },
  {
    question: "Will there be dancing?",
    answer:
      "Absolutely! Come ready to celebrate and show off your dance moves.",
  },
  {
    question: "What happens if it rains?",
    answer: "All of our wedding will be indoors, rain will not be a problem.",
  },
  {
    question: "What if I have additional questions?",
    answer: (
      <>
        Feel free to reach out to us at &nbsp;
        <a href="mailto:anthonyrachelnguyen@gmail.com" className="underline">
          anthonyrachelnguyen@gmail.com
        </a>
      </>
    ),
  },
];

export default faqs;
