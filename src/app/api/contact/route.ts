import { NextResponse } from 'next/server';
import { contactSchema, handleContact } from '@/lib/contact';

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = contactSchema.parse(json);
    await handleContact(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
