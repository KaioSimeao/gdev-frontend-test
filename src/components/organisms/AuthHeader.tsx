
import Link from 'next/link';
import { Logo } from '../atoms/Logo';



export const AuthHeader = () => {
  return (
    <nav className="fixed top-0 w-full h-16 flex justify-between items-center px-8 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center gap-12">
        <Logo/>
      <Link href="/" className="flex items-center gap-2">
        Home
      </Link>
      </div>
    </nav>
  );
};