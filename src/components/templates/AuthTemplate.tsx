import { AuthHeader } from '../organisms/AuthHeader';

export const AuthTemplate = ({
  title,
  subtitle,
  children
}: any) => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">

      <AuthHeader />

      <main className="pt-24 flex justify-center items-center min-h-screen">

        <div className="w-full max-w-md bg-white p-10 border">

          <header className="mb-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500 text-sm">{subtitle}</p>
          </header>

          {children}

        </div>

      </main>
    </div>
  );
};