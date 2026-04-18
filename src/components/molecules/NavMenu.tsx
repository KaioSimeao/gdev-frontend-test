import { NavLink } from '../atoms/NavLink';

export const NavMenu = ({ isAuthenticated }: any) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <NavLink href="/" className=" text-gray-500 hover:text-black">
        Home
      </NavLink>

      {isAuthenticated && (
        <>
          <NavLink href="/dashboard" className="text-gray-500 hover:text-black">
            Dashboard
          </NavLink>
          <NavLink href="/crud" className="text-gray-500 hover:text-black">
            CRUD
          </NavLink>
        </>
      )}
    </div>
  );
};