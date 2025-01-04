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
    answer: "We are allowing some children for close family and friends, but this will be reflected on your invitation. If your invite includes children, we’d love to celebrate with them! Thank you for understanding as we balance our guest list.",
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
      "Plus-ones are extended based on your invitation. If your invite includes a plus-one, we’d love for them to join us! However, we kindly ask that guests refrain from bringing additional attendees unexpectedly. Thank you for your understanding!",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Let us know about any dietary restrictions when you RSVP, and we’ll do our best to accommodate.",
  },
  {
    question: "Where is your gift registry?",
    answer:
      "We don't have a gift registry, but we will have an envelope box at the reception for cards and gifts. Your presence at our wedding is the greatest gift of all!",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "Yes, you are welcome to take photos throughout the day! However, please be mindful of our professional photographers. Avoid blocking their view or using flash, as this could interfere with capturing our special moments. Thank you for your understanding!",
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
        Feel free to reach out to us at
        <a href="mailto:anthonyrachelnguyen@gmail.com" className="underline">
          anthonyrachelnguyen@gmail.com
        </a>
        "
      </>
    ),
  },
];

export default faqs;
