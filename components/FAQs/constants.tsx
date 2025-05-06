import { ReactNode } from "react";

type FAQs = {
  question: string;
  answer: string | ReactNode;
};

const faqs: FAQs[] = [
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
      "Due to limited capacity, we are only able to accommodate those formally invited. If you received a plus one, it will be addressed on your envelope. If you have further questions, please reach out to us.",
  },
  {
    question: "Are kids invited?",
    answer:
      "Due to limited space, at this time we can only extend invites to kids to our closest family and friends.",
  },

  {
    question: "Do you have a gift registry?",
    answer: (
      <div>
        <div>
          f you would like to give a gift, we are grateful for any contributions
          toward our future together. Thank you so much! To contribute to our
          newlywed fund, you are more than welcome to send monetary gifts
          through Venmo, Zelle or cash/check at the wedding reception.
        </div>
        <br />
        <div className="text-center">
          <b>Venmo</b>: @anthony10101
        </div>
        <div className="text-center">
          <b>Zelle</b>: 714-791-1606
        </div>
        <div className="text-center">
          <b>Checks Payable to</b>: Anthony Nguyen
        </div>
      </div>
    ),
  },
  {
    question: "Will there be an open bar?",
    answer: "There will be an open bar. Please plan accordingly."
  },
  {
    question: "What is the dress code?",
    answer: "The dress code is [formal/semi-formal/cocktail/etc.].",
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
