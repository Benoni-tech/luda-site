import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;

  if (!body?.name || !body?.phone || !body?.branch) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  // Connect this to Google Sheets, a database or an SMS service before launch.
  console.log("New volunteer:", body);

  return NextResponse.json({ ok: true });
}
