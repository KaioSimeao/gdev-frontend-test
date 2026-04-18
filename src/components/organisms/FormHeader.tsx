import { Logo } from '../atoms/Logo';
import { NavLink } from '../atoms/NavLink';

export const FormHeader = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b">
      <div className="flex justify-between items-center px-8 h-16">
        
        <Logo />

        <NavLink href="/crud" className="text-gray-500 hover:text-black">
          Voltar
        </NavLink>

      </div>
    </nav>
  );
};