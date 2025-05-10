'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { submitPreReservation } from '@/app/actions/pre-reservation';
import { toast } from 'sonner';

interface PreReservationFormProps {
  landingPage: string;
  className?: string;
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
}

export function PreReservationForm({
  landingPage,
  className = '',
  buttonText = 'Reserve Now',
  placeholder = 'Enter your email address',
  successMessage = 'Thank you for your reservation! We will contact you soon.',
}: PreReservationFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitPreReservation({
        email,
        landingPage,
      });

      if (result.success) {
        toast.success(successMessage);
        setEmail('');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : buttonText}
        </Button>
      </div>
    </form>
  );
} 