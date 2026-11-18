"use client";
import { useState } from "react";

export interface Lesson {
  id: number;
  day: string;
  subject: string;
  room: string;
}

interface InteractiveListProps {
  lessons: Lesson[];
}

export default function InteractiveList({ lessons }: InteractiveListProps) {
  const [selectedDay, setSelectedDay] = useState<string>("Усі");
  const [showRooms, setShowRooms] = useState<boolean>(true);

  const filteredLessons = selectedDay === "Усі" 
    ? lessons 
    : lessons.filter((lesson) => lesson.day === selectedDay);

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "center" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>День тижня:</label>
          <select 
            value={selectedDay} 
            onChange={(e) => setSelectedDay(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="Усі">Усі дні</option>
            <option value="Понеділок">Понеділок</option>
            <option value="Вівторок">Вівторок</option>
            <option value="Середа">Середа</option>
          </select>
        </div>

        <button 
          onClick={() => setShowRooms(!showRooms)}
          style={{ 
            padding: "0.5rem 1rem", 
            backgroundColor: "#0070f3", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer",
            marginTop: "1.3rem"
          }}
        >
          {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
        </button>
      </div>

      {filteredLessons.length === 0 ? (
        <p style={{ color: "#666", fontStyle: "italic" }}>Нічого не знайдено для обраного дня.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {filteredLessons.map((lesson) => (
            <li 
              key={lesson.id} 
              style={{ 
                padding: "0.75rem", 
                marginBottom: "0.5rem", 
                border: "1px solid #eaeaea", 
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <strong>{lesson.subject}</strong>
                <div style={{ fontSize: "0.85rem", color: "#555" }}>День: {lesson.day}</div>
              </div>
              {showRooms && (
                <span style={{ fontSize: "0.85rem", backgroundColor: "#f0f0f0", padding: "0.25rem 0.5rem", borderRadius: "4px" }}>
                  {lesson.room}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}