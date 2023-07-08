interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return (
    <div>
      <button
        className="rounded-md px-2 py-1 w-24 text-white bg-[#116A7B]"
        onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
