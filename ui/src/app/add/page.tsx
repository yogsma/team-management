"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { addMember } from '@/lib/api';
import { showToast } from '@/lib/utils';

export default function AddMember() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'regular'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMember(formData).then(() => {
      router.push('/');
    }).catch((error) => {
        showToast(error.message, 'error');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Button 
        variant="ghost" 
        className="absolute top-4 left-4"
        onClick={() => router.push('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <h1 className="text-2xl font-bold mb-4">Add a team member</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-3 text-lg font-bold">Role</label>
          <div className="space-y-2">
            <label className="flex items-center justify-between">
              <span>Regular - can't delete members</span>
              <input
                type="radio"
                name="role"
                value="regular"
                checked={formData.role === 'regular'}
                onChange={handleChange}
                className="ml-3"
              />
            </label>
            <label className="flex items-center justify-between">
              <span>Admin - can delete members</span>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={handleChange}
                className="ml-3"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}