import InteractiveList from "./InteractiveList";

// Типізація для розкладу
export type Lesson = {
  id: number;
  day: string;
  subject: string;
  room: string;
};

export default async function PracticePage() {
  // Масив із 6 занять (дані на сервері)
  const lessons: Lesson[] = [
    { id: 1, day: "Понеділок", subject: "Бази даних", room: "Ауд. 204" },
    { id: 2, day: "Понеділок", subject: "Програмування (React)", room: "Ауд. 305" },
    { id: 3, day: "Вівторок", subject: "Веб-розробка", room: "Ауд. 102" },
    { id: 4, day: "Вівторок", subject: "Операційні системи", room: "Ауд. 410" },
    { id: 5, day: "Середа", subject: "Бази даних", room: "Ауд. 204" },
    { id: 6, day: "Середа", subject: "Програмування (Next.js)", room: "Ауд. 305" },
  ];

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Практична робота: Розклад занять (Варіант 2)</h2>
      <p><strong>Загальна кількість занять на сервері:</strong> {lessons.length}</p>
      
      <InteractiveList items={lessons} />
    </main>
  );
}