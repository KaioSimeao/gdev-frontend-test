'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { Logo } from '../atoms/Logo';
import { NavMenu } from '../molecules/NavMenu';
import { AuthButtons } from '../molecules/AuthButtons';

export const TopNavBar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 h-16">

        <div className="flex items-center gap-12">
          <Logo />
          <NavMenu isAuthenticated={isAuthenticated} />
        </div>

        <AuthButtons
          isAuthenticated={isAuthenticated}
          user={user}
          logout={logout}
        />
      </div>

      <div className="bg-gray-200 h-[1px] w-full"></div>
    </nav>
  );
};