const Dropdown = (): JSX.Element => {
  const options = [
    { value: '1', label: 'Paris' },
    { value: '2', label: 'New York' },
    { value: '3', label: 'Munich' },
    { value: '4', label: 'Roma' },
  ];
  return (
    <div className="relative mt-2">
      <select className="focus:shadow-outline cursor-pointer appearance-none rounded-lg border-none bg-gray-800 py-2 px-4 pr-8 leading-tight text-slate-500 shadow-md focus:outline-none shadow-black focus:border-transparent">
        <option
          className="text-sm text-slate-400"
          value=""
          disabled
          selected
          hidden
        >
          Selecciona una ciudad
        </option>
        {options.map((option, index) => (
          <option
            className="text-sm text-slate-400"
            value={option.value}
            key={index}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
