export const Input = ({ className = '', ...props }: any) => {
  return (
    <input
      className={`w-full bg-[#e8e8e8] py-4 px-4 outline-none text-sm focus:ring-1 focus:ring-black ${className}`}
      {...props}
    />
  );
};