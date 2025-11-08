import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Sentry example route removed — return 404 JSON instead of throwing.
export function GET() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}
