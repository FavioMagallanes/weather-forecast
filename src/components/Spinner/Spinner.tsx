const Spinner = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="w-6 h-6 border-4 border-blue-800 rounded-full animate-spin"
        role="progressbar"
      ></div>
    </div>
  );
};

export default Spinner;
