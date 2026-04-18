'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';

import { AuthTemplate } from '@/components/templates/AuthTemplate';
import { RegisterForm } from '@/components/organisms/RegisterForm';

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <AuthTemplate
      title="Crie sua conta"
    >
      <RegisterForm />
    </AuthTemplate>
  );
}