"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p style={{ color: "red", fontSize: "1.2rem" }}>Не вдалося отримати дані.</p>
      <button 
        onClick={() => reset()}
        style={{ padding: "0.5rem 1rem", marginTop: "1rem", cursor: "pointer" }}
      >
        Спробувати ще раз
      </button>
    </main>
  );
}