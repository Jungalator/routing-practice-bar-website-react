import { useParams } from "react-router-dom";
import events from "../../data/events.json";
import EventInfo from "./EventInfo/EventInfo";
import EventBackToHome from "./EventBackToHome";

export default function EventPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === Number(eventId));

  return (
    <>
      <EventBackToHome />
      {!event ? (
        <h1 className="text-4xl text-white text-center py-20">
          Event is not found
        </h1>
      ) : (
        <article
          key={event.id}
          className="flex justify-around w-full h-[100vh] pt-10 mb-20"
        >
          <div className="w-[33%] xl:w-[28%] h-[90%] rounded-tr-[364px] rounded-tl-[364px]">
            <img
              src={`/${event.img}`}
              alt="Event photo"
              className="object-cover w-full h-full rounded-tr-[364px] rounded-tl-[364px]"
            />
          </div>
          <EventInfo date={event.date} title={event.title} text={event.text} />
        </article>
      )}
    </>
  );
}
