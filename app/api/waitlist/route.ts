import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Waitlist from "@/lib/models/Waitlist";
import { sendWaitlistEmail } from "@/lib/mailer";
import { apiLimiter } from "@/lib/rateLimit";

export async function POST(req: Request) {
  try {
    // Basic IP rate limiting (3 requests per minute)
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    try {
      await apiLimiter.check(3, ip);
    } catch {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Connect to DB
    await connectToDatabase();

    // Check if email already exists
    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email is already on the waitlist!" },
        { status: 400 }
      );
    }

    // Save to DB
    await Waitlist.create({ email });

    // Send email via SMTP (non-blocking)
    sendWaitlistEmail(email).catch(console.error);

    return NextResponse.json(
      { message: "Successfully joined waitlist" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
