export default function SnackList() {
  const snacks = [
    { id: 1, name: 'Bread', rating: 1 },
    { id: 2, name: 'Nuts', rating: 2 },
    { id: 3, name: 'Veggies', rating: 3 },
    { id: 4, name: 'Cheese', rating: 4 },
    { id: 5, name: 'Apple', rating: 5 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => b.rating - a.rating);

  return (
    <>
      {sortedSnacks.map((snack) => (
        <li key={snack.id}>{snack.name}</li>
      ))}
    </>
  );
}
