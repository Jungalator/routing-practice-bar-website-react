import { useParams } from "react-router-dom";
import events from "../../data/events.json";
import EventInfo from "./EventInfo/EventInfo";

export default function EventPage() {
  const { eventId } = useParams();
  return (
    <>
      {events
        .filter((item) => item.id === Number(eventId))
        .map((item) => {
          return (
            <article
              key={item.id}
              className="flex justify-around w-[100%] h-[100vh] pt-10 mb-20"
            >
              <div className="w-[33%] xl:w-[28%] h-[90%] rounded-tr-[364px] rounded-tl-[364px]">
                <img
                  src={`/public/${item.img}`}
                  alt="Event photo"
                  className="object-cover w-[100%] h-[100%] rounded-tr-[364px] rounded-tl-[364px]"
                />
              </div>
              <EventInfo date={item.date} title={item.title} text={item.text} />
            </article>
          );
        })}
    </>
  );
}
