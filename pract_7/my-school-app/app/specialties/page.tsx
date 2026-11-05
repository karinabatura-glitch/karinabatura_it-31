export default async function SpecialtiesPage() {
  // Штучна затримка на 2 секунди для демонстрації loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h3>Наші освітні програми</h3>
      <p>Оберіть цікавий для вас напрямок у меню вище, щоб дізнатися деталі.</p>
    </div>
  );
}