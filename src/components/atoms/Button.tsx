export const Button = ({ children, className = '', ...props }: any) => {
  return (
    <button
      className={`px-5 py-2 text-sm font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};