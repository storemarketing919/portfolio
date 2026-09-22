import React, { useEffect, useState } from "react";

import skillsContent from "../../data/SkillsContent";

const Skills = () => {
  const [visiblePercentages, setVisiblePercentages] = useState(
    skillsContent.map(() => 0)
  );

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1400;
    let animationFrame;

    const animatePercentages = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setVisiblePercentages(
        skillsContent.map((skill) =>
          Math.round(Number(skill.skillPercent) * easedProgress)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animatePercentages);
      }
    };

    animationFrame = requestAnimationFrame(animatePercentages);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div
            className={`c100 ${val.skillClass} skill-progress`}
            style={{ "--skill-delay": `${i * 100}ms` }}
          >
            <div
              className="skill-progress-ring"
              style={{
                background: `conic-gradient(from -90deg, #00d9ff 0%, #4f8cff 55%, #a855f7 ${visiblePercentages[i]}%, rgba(70, 105, 150, 0.28) ${visiblePercentages[i]}% 100%)`,
              }}
            />
            <span className="skill-progress-number">
              {visiblePercentages[i]}%
            </span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
