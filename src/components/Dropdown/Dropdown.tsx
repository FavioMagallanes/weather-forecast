const Dropdown = (): JSX.Element => {
  const options = [
    { value: '1', label: 'Paris' },
    { value: '2', label: 'New York' },
    { value: '3', label: 'Munich' },
    { value: '4', label: 'Roma' },
    { value: '5', label: 'Madrid' },
  ];
  return (
    <div className="mt-2 bg-effect">
      <select className="focus:shadow-outline font-bold tracking-[-.06em] cursor-pointer appearance-none rounded-lg border-none bg-gray-800 py-2 px-4 pr-8  text-slate-500 shadow-xl focus:outline-none shadow-black focus:border-transparent">
        <option
          className="text-sm text-slate-400 "
          value=""
          disabled
          selected
          hidden
        >
          Seleccione una ciudad
        </option>
        {options.map(option => (
          <option
            className="text-sm text-slate-400 font-bold tracking-[-.06em]"
            value={option.value}
            key={option.label}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
