export const InfoCard = ({ number, title, description }: any) => {
  return (
    <div className="space-y-6">
      <div className="text-black font-bold text-5xl">{number}</div>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};