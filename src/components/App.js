
import React, { useState, useCallback } from "react";

const SkillList = React.memo(({ skills, onDelete }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li
          id={`skill-number-${index}`}
          key={index}
          onClick={() => onDelete(skill)}
          style={{ cursor: "pointer" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
});

function UseCallbackComp() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]);

  const [input, setInput] = useState("");

  const addSkill = useCallback(() => {
    const newSkill = input.trim();

    if (!newSkill) return;

    setSkills(prev => {
      if (prev.some(
        skill => skill.toLowerCase() === newSkill.toLowerCase()
      )) {
        return prev;
      }

      return [...prev, newSkill];
    });

    setInput("");
  }, [input]);

  const deleteSkill = useCallback((skillToDelete) => {
    setSkills(prev =>
      prev.filter(skill => skill !== skillToDelete)
    );
  }, []);

  return (
    <div>
      <h2 id="heading">Skills List</h2>

      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a skill"
      />

      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>

      <SkillList
        skills={skills}
        onDelete={deleteSkill}
      />
    </div>
  );
}

export default UseCallbackComp;


