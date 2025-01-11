import HomePage from "./realHome"
import SaveTheDate from "../app/save_the_date/page";

export default function Home() {
  const save_the_date = process.env.NEXT_PUBLIC_SAVE_THE_DATE_ON;
  console.log('save_the_date: ', save_the_date);
  return (
    <div>
      {save_the_date === "TRUE" ? <SaveTheDate /> : <HomePage />}
    </div>
  );
}
