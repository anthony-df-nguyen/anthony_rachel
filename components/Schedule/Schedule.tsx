import events from "./constants";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  showDescription?: boolean;
};

const Schedule = ({ showDescription }: Props) => {
  return (
    <div className="justify-between px-6 flex flex-col lg:flex-col gap-16 lg:gap-16">
      {events.map((event, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="titles text-center text-2xl lg:text-3xl">
            {event.time}
          </div>
          {/* <div className="w-3 h-1 border-b-[1px] border-gray-300 mx-auto block text-center"></div> */}
          <div className="fancy text-center text-4xl lg:text-4xl">
            {event.title}
          </div>

          <div className="mt-0 titles mx-auto text-center text-xl lg:text-xl">
            {event.link ? (
              <a
                href={event.link}
                target="_blank"
                className="text-center flex items-center gap-1 text-[var(--green)] font-bold hover:text-[var(--darkgreen)] underline hover:text-[var(--green)]"
              >
                {event.location}
              </a>
            ) : (
              <div className="font-bold">{event.location}</div>
            )}
          </div>
          <div className="text-center titles text-lg">{event.city}</div>

          {showDescription && event.description && (
            <p className="mx-auto mt-4 max-w-prose">{event.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Schedule;
