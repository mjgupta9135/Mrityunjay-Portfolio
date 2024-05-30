import React, { useContext } from "react";

import "./Achievement.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";

function Achievement() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <div
          className="achievement"
          id="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="experience-image" style={{ marginTop: "200px" }}>
            <img src={theme.expimg} alt="" />
          </div>

          <div className="achievement-cards">
            <div className="achievement-body">
              <h1 style={{ color: theme.primary, paddingLeft: "20px" }}>
                Certification
              </h1>
              {/* <h4 style={{color:theme.tertiary}}>{achievementData.bio}</h4> */}
            </div>
            {achievementData.achievements.map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Achievement;
