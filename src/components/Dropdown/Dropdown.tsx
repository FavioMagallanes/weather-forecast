import React from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface Props {
  options: Option[];
  handleSelectCity: (cityName: string) => void;
}

const Dropdown = ({ options, handleSelectCity }: Props): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedCity = event.target.value;
    handleSelectCity(selectedCity);
  };

  return (
    <div className="mt-2 bg-effect p-0">
      <select
        className="focus:shadow-outline font-bold tracking-[-.06em] cursor-pointer appearance-none rounded-lg border-none bg-gray-800 py-2 px-4 pr-8  text-slate-500 shadow-lg focus:outline-none shadow-black focus:border-transparent"
        onChange={handleChange}
        defaultValue=""
      >
        <option className="text-sm text-slate-400 " value="" disabled hidden>
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
