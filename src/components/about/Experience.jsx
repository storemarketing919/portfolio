import React, { useEffect, useRef, useState } from "react";

import experienceContent from "../../data/ExperienceContent";

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const experienceListRef = useRef(null);

  useEffect(() => {
    const experienceList = experienceListRef.current;

    if (!experienceList) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setExpandedItem(null);
        }
      },
      { threshold: 0 }
    );

    observer.observe(experienceList);

    return () => observer.disconnect();
  }, []);

  const toggleItem = (index) => {
    setExpandedItem((currentItem) =>
      currentItem === index ? null : index
    );
  };

  return (
    <ul ref={experienceListRef}>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <button
            type="button"
            className={`experience-toggle ${
              expandedItem === i ? "is-expanded" : "is-collapsed"
            }`}
            onClick={() => toggleItem(i)}
            aria-expanded={expandedItem === i}
            aria-controls={`experience-details-${i}`}
            aria-label={`${expandedItem === i ? "Collapse" : "Expand"} ${
              val.position
            } at ${val.compnayName}`}
          >
            <span className="experience-toggle-icon" aria-hidden="true"></span>
          </button>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          {expandedItem === i && (
            <p id={`experience-details-${i}`} className="open-sans-font">
              {val.details}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
