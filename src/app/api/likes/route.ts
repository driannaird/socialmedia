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

    const { postId, status, likeId } = await req.json();

    if (status) {
      const newLike = await db.like.delete({
        where: {
          id: likeId,
        },
      });

      return NextResponse.json({ data: newLike }, { status: 200 });
    } else {
      const newLike = await prisma?.like.create({
        data: {
          userId: parseInt(session.id),
          postId,
        },
      });

      return NextResponse.json({ data: newLike }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
