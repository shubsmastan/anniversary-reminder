const Animation = () => {
  return (
    <>
      <div className="bg-transparent min-h-screen flex items-center justify-center px-16 h-72">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-56 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-56 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-56 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </>
  );
};

export default Animation;
