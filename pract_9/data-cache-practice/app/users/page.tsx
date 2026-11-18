type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

export default async function UsersPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=8",
    { cache: "no-store" } 
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження даних користувачів");
  }

  const users: User[] = await res.json();

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Список користувачів (Варіант 2)</h1>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>Дані отримано з JSONPlaceholder</p>
      
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li 
            key={user.id} 
            style={{ 
              padding: "1rem", 
              marginBottom: "0.75rem", 
              border: "1px solid #ddd", 
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", color: "#0070f3" }}>{user.name}</h3>
            <p style={{ margin: "0.2rem 0", color: "#333" }}><strong>Email:</strong> {user.email}</p>
            <p style={{ margin: "0.2rem 0", color: "#555" }}><strong>Місто:</strong> {user.address.city}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}