interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return (
    <div className="bg-effect">
      <button className="bg-gray-800 py-2 px-4 text-slate-500 shadow-xl shadow-black rounded-lg font-bold tracking-[-.06em] cursor-pointer mt-2">
        {text}
      </button>
    </div>
  );
};

export default Button;
