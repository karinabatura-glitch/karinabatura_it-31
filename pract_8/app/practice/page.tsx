import InteractiveList from "./InteractiveList";

export interface Lesson {
  id: number;
  day: string;
  subject: string;
  room: string;
}

export default async function PracticePage() {
  const lessons: Lesson[] = [
    { id: 1, day: "Понеділок", subject: "Об'єктно-орієнтоване програмування", room: "Ауд. 201" },
    { id: 2, day: "Понеділок", subject: "Бази даних", room: "Ауд. 305" },
    { id: 3, day: "Вівторок", subject: "Веб-розробка", room: "Ауд. 410" },
    { id: 4, day: "Вівторок", subject: "Операційні системи", room: "Ауд. 102" },
    { id: 5, day: "Середа", subject: "Вища математика", room: "Ауд. 215" },
    { id: 6, day: "Середа", subject: "Англійська мова", room: "Ауд. 108" },
  ];

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Розклад занять (Варіант 2)</h1>
      <p>Загальна кількість занять на сервері: <strong>{lessons.length}</strong></p>
      <hr style={{ margin: "1rem 0" }} />
      <InteractiveList lessons={lessons} />
    </main>
  );
}