"use client";

import { useState } from "react";
import { Lesson } from "./page";

export default function InteractiveList({ items }: { items: Lesson[] }) {
  const [selectedDay, setSelectedDay] = useState("Всі");
  const [showRooms, setShowRooms] = useState(true);

  // Фільтрація за обраним днем тижня
  const filteredItems = selectedDay === "Всі" 
    ? items 
    : items.filter((item) => item.day === selectedDay);

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "15px", display: "flex", gap: "15px", alignItems: "center" }}>
        <label>
          Оберіть день:{" "}
          <select 
            value={selectedDay} 
            onChange={(e) => setSelectedDay(e.target.value)}
            style={{ padding: "5px", marginLeft: "5px" }}
          >
            <option value="Всі">Всі дні</option>
            <option value="Понеділок">Понеділок</option>
            <option value="Вівторок">Вівторок</option>
            <option value="Середа">Середа</option>
          </select>
        </label>

        <button 
          onClick={() => setShowRooms(!showRooms)}
          style={{ padding: "6px 12px", cursor: "pointer" }}
        >
          {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li 
              key={item.id} 
              style={{ 
                padding: "10px", 
                margin: "5px 0", 
                border: "1px solid #ccc", 
                borderRadius: "5px",
                background: "#f9f9f9" 
              }}
            >
              <strong>{item.subject}</strong> — {item.day} 
              {showRooms && <span style={{ color: "gray", marginLeft: "10px" }}>({item.room})</span>}
            </li>
          ))
        ) : (
          <p style={{ color: "red" }}>Нічого не знайдено для обраного дня.</p>
        )}
      </ul>
    </div>
  );
}