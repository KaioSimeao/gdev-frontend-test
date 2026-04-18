import { Button } from '../atoms/Button';
import { NavLink } from '../atoms/NavLink';

export const AuthButtons = ({ isAuthenticated, user, logout }: any) => {
  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Olá, {user?.name.split(' ')[0]}
        </span>

        <Button onClick={logout} className="text-gray-500 hover:text-red-600">
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <NavLink href="/login" className="text-gray-500 font-medium hover:text-black transition-colors text-sm">
        Login
      </NavLink>
      <NavLink href="/register" className="bg-black text-white px-5 py-2">
        Registrar
      </NavLink>
    </div>
  );
};