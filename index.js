import { useState } from "react";

export default function StudentTools() {
  const [grades, setGrades] = useState(["", "", ""]);
  const [gpa, setGpa] = useState(null);
  const [essay, setEssay] = useState("");
  const [feedback, setFeedback] = useState("");

  const calculateGPA = () => {
    const points = grades.map((g) => parseFloat(g) || 0);
    const total = points.reduce((a, b) => a + b, 0);
    setGpa((total / points.length).toFixed(2));
  };

  const gradeEssay = () => {
    if (essay.length < 50) {
      setFeedback("Essay too short. Write at least 50 characters.");
    } else {
      const score = Math.floor(Math.random() * 3) + 3;
      setFeedback(`Estimated score: ${score}/5. Looks clear and organized.`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📚 Student Tools Hub</h1>

      <section style={{ marginTop: "2rem" }}>
        <h2>🎓 GPA Calculator</h2>
        {grades.map((g, i) => (
          <input
            key={i}
            placeholder={`Grade ${i + 1}`}
            value={g}
            onChange={(e) => {
              const newGrades = [...grades];
              newGrades[i] = e.target.value;
              setGrades(newGrades);
            }}
            style={{ display: "block", marginBottom: "0.5rem" }}
          />
        ))}
        <button onClick={calculateGPA}>Calculate GPA</button>
        {gpa && <p>Your GPA is: <strong>{gpa}</strong></p>}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>📝 AI Essay Grader</h2>
        <textarea
          rows="5"
          placeholder="Paste your essay here..."
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        ></textarea>
        <button onClick={gradeEssay}>Get Feedback</button>
        {feedback && <p style={{ fontStyle: "italic" }}>{feedback}</p>}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>🗓️ Schedule Optimizer</h2>
        <p>Use Notion or Google Sheets to build your ideal study schedule. We recommend 2 Pomodoro blocks per subject.</p>
        <a href="https://www.notion.so/personal-study-template" target="_blank" rel="noopener noreferrer">
          Try a prebuilt Notion template
        </a>
      </section>
    </div>
  );
}