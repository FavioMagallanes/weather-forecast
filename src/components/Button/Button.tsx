interface ButtonProps {
  text: string;
  fetchForecast?: () => Promise<void>;
}

const Button = ({ text, fetchForecast }: ButtonProps): JSX.Element => {
  return (
    <div className="bg-effect">
      <button
        onClick={fetchForecast}
        className="bg-gray-800 py-2 px-4 text-slate-500 shadow-xl shadow-black rounded-lg font-bold tracking-[-.06em] cursor-pointer mt-2"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
