export const StatCard = ({
  title,
  value,
  sub,
  isProgress,
  progress
}: any) => {
  return (
    <div className="bg-[#f3f3f3] p-8 flex flex-col justify-between h-48 border border-gray-200">
      
      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
        {title}
      </span>

      <div>
        <div className="text-4xl font-bold tracking-tighter">
          {value}
        </div>

        {isProgress ? (
          <div className="w-full bg-gray-300 h-1 mt-4">
            <div
              className="bg-black h-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        ) : (
          <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
            {sub}
          </div>
        )}
      </div>
    </div>
  );
};