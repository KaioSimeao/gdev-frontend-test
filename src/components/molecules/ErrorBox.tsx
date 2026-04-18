

export const ErrorBox = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div className="p-4 bg-red-100 text-red-800 flex gap-3">
      Erro:
      <span className="text-sm">{message}</span>
    </div>
  );
};