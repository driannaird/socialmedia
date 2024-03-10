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

    const { content } = await req.json();

    const newPost = await db?.post.create({
      data: {
        content,
        authorId: parseInt(session.id),
      },
    });

    return NextResponse.json({ data: newPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
