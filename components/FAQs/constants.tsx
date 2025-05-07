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
        Please RSVP by August 1st 2025 using &nbsp;
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
    question: "I can't find my name when trying to RSVP, what should I do?",
    answer: (
      <>
        Make sure to enter your name that you sent us on your Save the Date form. Try different variations as well. If you still have trouble please reach out to us as soon as possible by calling or emailing at &nbsp;
        <a href="mailto:anthonyrachelnguyen@gmail.com" className="underline">
          anthonyrachelnguyen@gmail.com
        </a>{" "}
        so we can correct the issue!
      </>
    ),
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "Due to limited capacity, we are only able to accommodate those formally invited. If you received a plus one, it will be addressed on your envelope. If you have further questions, please reach out to us.",
  },
  {
    question: "Do you have a gift registry?",
    answer: (
      <div>
        <div>
          Your presence is truly the best gift we could ask for. If you’re
          thinking of giving a gift, we’d be grateful for a contribution toward
          our future plans—whether it’s travel, a home, or just building our
          life together. Monetary gifts can be sent via Venmo, Zelle, or
          cash/check at the wedding reception.
        </div>
        <br />
        <div className="text-left">
          <b>Venmo</b>: <a className="text-blue-500" href="https://venmo.com/u/anthony10101"> @anthony10101</a>
        </div>
        <div className="text-left">
          <b>Zelle</b>: 714-791-1606
        </div>
        <div className="text-left">
          <b>Checks Payable to</b>: Anthony Nguyen
        </div>
      </div>
    ),
  },
  {
    question: "What is the dress code?",
    answer: (
      <div>
        <b>Semi-Formal:</b> Tuxes and gowns are welcome, and so are suits and
        cocktail dresses. Please feel free to wear a Vietnamese traditional
        dress (ao dai) as well if attending the Church Ceremony.
      </div>
    ),
  },
  {
    question: "Will the ceremony/reception be indoors or outdoors?",
    answer:
      "Our ceremony and reception will be held indoors. However, since it may still be warm outside, we recommend dressing comfortably for the weather — especially during arrival and outdoor photos.",
  },

  {
    question: "Can I take photos during the ceremony?",
    answer:
      "You are welcome to take photos and vide throughout the day! However, please be mindful of our professional photographers and videographers. Avoid blocking their view or using flash, as this could interfere with capturing our special moments. Thank you for your understanding!",
  },
  {
    question: "What type of food will be served?",
    answer: "We’ll be serving a traditional Chinese 8-course banquet meal featuring a variety of dishes to share. If you have any dietary restrictions or allergies, please contact us in advance so we can accommodate."
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
