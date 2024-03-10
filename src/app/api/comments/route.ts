import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getCurrentUser();

  try {
    if (!session?.email) {
      return NextResponse.json(
        { message: "Not Authenticated!" },
        { status: 401 }
      );
    }

    const { text, postId } = await req.json();

    const newComment = await db?.comment.create({
      data: {
        text,
        userId: parseInt(session.id),
        postId,
      },
    });

    return NextResponse.json({ data: newComment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
