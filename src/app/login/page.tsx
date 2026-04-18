'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { LoginForm } from '@/components/organisms/LoginForm';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (

    <div className='bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans'>
       <AuthTemplate
      title="Login"
      subtitle="Insira suas credenciais"
    >
      <LoginForm />
    </AuthTemplate>
    </div>
   
  );
}