export const Text = ({ children, className = '' }: any) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
};