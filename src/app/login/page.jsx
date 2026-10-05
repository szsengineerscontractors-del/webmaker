// src/app/login/page.jsx
'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!data.ok) {
        setError(data.error || 'Login failed.');
        setLoading(false);
        return;
      }

      router.push(next);
      router.refresh();
    } catch {
      setError('Network error. Try again.');
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">Log in to manage your sites.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label className="login-field">
            <span className="login-field-label">Email</span>
            <input
              className="login-input"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </label>

          <label className="login-field">
            <span className="login-field-label">Password</span>
            <input
              className="login-input"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="login-footer">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="login-link">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}