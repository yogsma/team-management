const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

export async function fetchMembers() {
  const response = await fetch(`${API_BASE_URL}/team-members/`);

  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }
  return response.json();
}

export async function addMember(memberData: any) {
  const response = await fetch(`${API_BASE_URL}/team-members/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(memberData),
  });
  if (!response.ok) {
    throw new Error('Failed to add member');
  }
  return response.json();
}

export async function updateMember(id: string, memberData: any) {
  const response = await fetch(`${API_BASE_URL}/team-members/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(memberData),
  });
  if (!response.ok) {
    throw new Error('Failed to update member');
  }
  return response.json();
}

export async function fetchMember(id: string) {
  const response = await fetch(`${API_BASE_URL}/team-members/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch member');
  }
  return response.json();
}

export async function deleteMember(id: string) {
  const response = await fetch(`${API_BASE_URL}/team-members/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete member');
  }
  return response.ok;
}