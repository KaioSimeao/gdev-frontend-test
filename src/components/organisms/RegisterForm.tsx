'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { mockRegisterApi } from '@/services/authService';

import { FormField } from '../molecules/FormField';
import { ErrorBox } from '../molecules/ErrorBox';
import { Button } from '../atoms/Button';

export const RegisterForm = () => {
  const router = useRouter();
  const { login } = useAuthStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (password.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres.');
      }

      const res = await mockRegisterApi(name, email, password);

      login(res.user, res.token);

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Erro ao registrar');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-8">

      <ErrorBox message={error} />

      <FormField
        label="Nome Completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Fulano da Silva"
      />

      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@email.com"
      />

      <FormField
        label="Senha"
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
        {isLoading ? 'Creating...' : 'Create Account'}
      </Button>

      <p className="text-center text-sm text-gray-500">
        Já tem uma conta?
        <span
          onClick={() => router.push('/login')}
          className="ml-1 font-bold text-black cursor-pointer"
        >
          Login
        </span>
      </p>

    </form>
  );
};