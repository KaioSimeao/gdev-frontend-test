'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { mockLoginApi } from '@/services/authService';

import { FormField } from '../molecules/FormField';
import { ErrorBox } from '../molecules/ErrorBox';
import { Button } from '../atoms/Button';

export const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await mockLoginApi(email, password);

      login(res.user, res.token);

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Erro ao autenticar');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-8">

      <ErrorBox message={error} />

      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@email.com"
      />

      <FormField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </Button>

       <p className="text-center text-sm text-gray-500">
        Não tem conta ainda?
        <span
          onClick={() => router.push('/register')}
          className="ml-1 font-bold text-black cursor-pointer"
        >
          Registrar
        </span>
      </p>

    </form>
  );
};