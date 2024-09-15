"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { fetchMembers } from '@/lib/api';
import { showToast } from '@/lib/utils';

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
}

export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers().then(setMembers).catch((error) => {
      showToast(error.message, 'error');
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold mb-4">List Page</h1>
      <p className="mb-4">You have {members.length} members.</p>
      <Link href="/add" className="absolute top-4 right-4">
        <Button size="lg" className="rounded-full w-12 h-12 p-0">
          <Plus className="h-6 w-6" />
        </Button>
      </Link>
      <div className="w-full max-w-2xl">
        {members.map((member, index) => (
          <Link href={`/edit/${member.id}`} key={member.id}>
            <div className="border-b py-4">
              <h2 className="font-semibold">{member.firstName} {member.lastName}
              {member.role === 'admin' && <span className="ml-2 text-lg font-normal text-blue-500">(Admin)</span>}
              </h2>
              <p>{member.email}</p>
              <p>{member.phone}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}