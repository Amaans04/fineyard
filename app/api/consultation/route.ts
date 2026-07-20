import { NextResponse } from "next/server";

import { consultationSchema } from "@/lib/validations/consultation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = consultationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    // Phase 5 will wire this to email/CRM integration.
    console.info("Consultation form submission:", result.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
