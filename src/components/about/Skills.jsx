import React, { useEffect, useRef, useState } from "react";

import skillsContent from "../../data/SkillsContent";

const getSkillProgressColor = (percentage) => {
  if (percentage === 100) {
    return "#ffb703";
  }

  if (percentage >= 90) {
    return "#ff4fa3";
  }

  if (percentage >= 70) {
    return "#00d9ff";
  }

  if (percentage >= 40) {
    return "#4f8cff";
  }

  return "#20e3b2";
};

const Skills = () => {
  const firstSkillRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [visiblePercentages, setVisiblePercentages] = useState(
    skillsContent.map(() => 0)
  );

  useEffect(() => {
    const skillElement = firstSkillRef.current;

    if (!skillElement || hasStarted) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(skillElement);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return undefined;
    }

    const duration = 2400;
    let animationFrame;
    let startTime;
    const startDelay = window.setTimeout(() => {
      startTime = performance.now();
      animationFrame = requestAnimationFrame(animatePercentages);
    }, 450);

    const animatePercentages = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setVisiblePercentages(
        skillsContent.map((skill) =>
          Math.min(
            Number(skill.skillPercent),
            Math.round(Number(skill.skillPercent) * easedProgress)
          )
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animatePercentages);
      }
    };

    return () => {
      window.clearTimeout(startDelay);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted]);

  return (
    <>
      {skillsContent.map((val, i) => {
        const progressColor = getSkillProgressColor(Number(val.skillPercent));
        const progressStop = Math.min(100, visiblePercentages[i]);

        return (
          <div
            className="col-6 col-md-3 mb-3 mb-sm-5"
            key={i}
            ref={i === 0 ? firstSkillRef : undefined}
          >
          <div
            className={`c100 skill-progress${
              hasStarted ? " skill-progress-visible" : ""
            }${
              Number(val.skillPercent) === 100 ? " skill-complete" : ""
            }`}
            style={{
              "--skill-delay": `${i * 180}ms`,
              "--skill-color": progressColor,
            }}
          >
            <div
              className="skill-progress-ring"
              style={{
                background: `conic-gradient(from -90deg, ${progressColor} 0%, ${progressColor} ${progressStop}%, rgba(70, 105, 150, 0.28) ${progressStop}% 100%)`,
              }}
            />
            <span className="skill-progress-number">
              {visiblePercentages[i]}%
            </span>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
