"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { deleteMember, fetchMember, updateMember } from '@/lib/api';
import { showToast } from '@/lib/utils';

export default function EditMember({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'regular'
  });

  useEffect(() => {
    fetchMember(params.id).then(setFormData);
  }, [params.id]);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMember(params.id, formData).then(() => {
      router.push('/');
    }).catch((error) => {
        showToast(error.message, 'error');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleConfirmDelete = async () => {
    try {
      await deleteMember(params.id);
      showToast('Member deleted successfully', 'success');
      router.push('/');
    } catch (error) {
      console.error('Error deleting member:', error);
      showToast('Failed to delete member', 'error');
    } finally {
      setShowConfirmDialog(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
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
      <h1 className="text-2xl font-bold mb-4">Edit Member</h1>
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
        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <div>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="regular"
                checked={formData.role === 'regular'}
                onChange={handleChange}
                className="mr-2"
              />
              Regular
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={handleChange}
                className="mr-2"
              />
              Admin
            </label>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button type="button" onClick={handleDeleteClick} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
        {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this member?</p>
            <div className="flex justify-end">
              <button onClick={handleCancelDelete} className="mr-2 px-4 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-500 text-white rounded">
                Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </main>
  );
}
