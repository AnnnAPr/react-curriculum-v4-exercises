export default function FilterButtonGroup({ onFilterChange }) {
  const options = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
  ];

  return (
    <div>
      {options.map((option) => (
        <button key={option.value} onClick={() => onFilterChange(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}
