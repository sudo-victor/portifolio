import { NextResponse } from "next/server";

import { buildMail, makeTransporter, type ContactPayload } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  if (!process.env.MAIL_AUTH_HOST || !process.env.MAIL_AUTH_EMAIL) {
    return NextResponse.json(
      { error: "mail not configured" },
      { status: 503 },
    );
  }

  try {
    const transporter = makeTransporter();
    await transporter.sendMail(buildMail(body));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "send failed" }, { status: 502 });
  }
}
