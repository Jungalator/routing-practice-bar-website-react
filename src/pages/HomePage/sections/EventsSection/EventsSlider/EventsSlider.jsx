import { useEffect, useRef, useState } from "react";
import Button from "../../../../../components/Button";
import events from "../../../../../data/events.json";
import EventsItem from "./EventsItem";

export default function EventsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const itemRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateResize = () => {
      setItemWidth(itemRef.current.getBoundingClientRect().width);
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    };

    updateResize();
    window.addEventListener("resize", updateResize);

    return () => window.removeEventListener("resize", updateResize);
  }, []);

  const nextSlide = () => {
    const visibleCount = containerWidth / itemWidth;

    if (currentIndex < events.length - Math.floor(visibleCount - 1)) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <article>
      <div className="mx-auto mb-20 flex justify-between w-[20%] xl:w-[16%]">
        <Button direction="-scale-x-100" handleClick={prevSlide} />
        <Button handleClick={nextSlide} />
      </div>
      <div
        ref={containerRef}
        className="ml-[5%] w-[95%]  h-95 xl:h-105 overflow-hidden"
      >
        <ul
          className={`flex h-95 transition-transform duration-300`}
          style={{
            transform: `translateX(${-currentIndex * (itemWidth || 0)}px)`,
          }}
        >
          {events.map((item, idx) => {
            return (
              <EventsItem
                item={item}
                key={item.id}
                itemRef={idx === 0 ? itemRef : null}
                itemCount={events.length}
              />
            );
          })}
        </ul>
      </div>
    </article>
  );
}
