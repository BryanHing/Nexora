import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '@hooks/useAuth';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import toast from 'react-hot-toast';

const signupSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup(data);
      navigate('/dashboard');
      toast.success('Account created successfully');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent">
              N
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white">Nexora</h1>
          <p className="text-blue-100 mt-2">AI-powered workplace assistant</p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Create account</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Join thousands of productive teams</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  {...register('firstName')}
                  type="text"
                  placeholder="First name"
                  className="pl-10"
                  error={errors.firstName?.message}
                />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  {...register('lastName')}
                  type="text"
                  placeholder="Last name"
                  className="pl-10"
                  error={errors.lastName?.message}
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                {...register('email')}
                type="email"
                placeholder="Email address"
                className="pl-10"
                error={errors.email?.message}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                {...register('password')}
                type="password"
                placeholder="Password (min. 8 characters)"
                className="pl-10"
                error={errors.password?.message}
              />
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" required className="rounded" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                I agree to the{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Privacy Policy
                </a>
              </span>
            </label>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-500 hover:text-blue-600 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
