const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center mt-16 h-24 gap-2 bg-[#1B212D]">
      <p className="text-slate-400 text-xs font-bold">
        Personal Pay frontend challenge
      </p>
      <p className="text-slate-400 text-xs font-bold">
        Made with ❤️ by{' '}
        <a
          className="gradient-text"
          href="https://www.linkedin.com/in/favio-magallanes/"
          target="_blank"
          rel="noreferrer"
        >
          @Favio Magallanes
        </a>
      </p>
    </div>
  );
};

export default Footer;
