import { createVolunteer, getAllVolunteers } from '@/server/actions/Volunteer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();

  await createVolunteer(data);

  return NextResponse.json({ success: true }, { status: 201 });
}

export async function GET() {
  const vols = await getAllVolunteers();

  return NextResponse.json(vols, { status: 200 });
}
