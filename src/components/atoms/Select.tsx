export const Select = ({ children, className = '', ...props }: any) => {
  return (
    <select
      className={`w-full bg-[#e8e8e8] py-4 px-4 outline-none text-sm appearance-none focus:ring-1 focus:ring-black ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};