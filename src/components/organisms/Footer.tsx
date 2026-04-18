import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full rounded-none bg-[#f3f3f3] border-t border-gray-200">
     <div className="py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-gray-900">T-Movie</span>
            <p className="text-sm leading-relaxed text-gray-600">© 2024 T-Movie Systems. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm leading-relaxed">
            <Link href="#" className="text-gray-500 hover:underline transition-all">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:underline transition-all">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:underline transition-all">Documentation</Link>
          </div>
        </div>
    </footer>
  );
};