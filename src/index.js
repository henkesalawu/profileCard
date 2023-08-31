import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsData = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "HTML-CSS",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "React",
    level: "beginner",
    color: "yellow"
  },
  {
    skill: "web design",
    level: "beginner",
    color: "yellow"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar className="avatar" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="wanda"/>;
}

function Intro() {
  return (
  <div>
    <h1>Wanda Salawu</h1>
    <p>I am a we developer currently learning JS and React. 
    I like to dance listen to music and spend time on the beach.
    </p>
  </div>
  );
}


function SkillList() {
  const skills = skillsData;

  return (
    <ul className="skill-list">
    {skills.map((skill) => (
      <Skill skillObj={skill} key={skill.name}/>
    ))}
    </ul>
  );
}

function Skill({skillObj}) {
  return (
    <div className="skill" style={{backgroundColor: skillObj.color}}>
      <span>{skillObj.skill}</span>
      <span>
      {skillObj.level === "beginner" && "👍"}
      {skillObj.level === "intermediate" && "💪"}
      </span>
    </div>
  );
}



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);