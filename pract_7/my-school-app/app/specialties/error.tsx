'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: '20px', border: '1px solid red', background: '#fff5f5' }}>
      <h3 style={{ color: 'red' }}>Сталася помилка!</h3>
      <p>{error.message}</p>
      <button 
        onClick={() => reset()} 
        style={{ padding: '8px 16px', background: 'red', color: 'white', border: 'none', cursor: 'pointer', marginTop: '10px' }}
      >
        Спробувати ще раз
      </button>
    </div>
  );
}