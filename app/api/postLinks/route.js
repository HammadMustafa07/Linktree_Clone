import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("linktree_clone_project");
    const collection = db.collection("links");

    const body = await request.json();

    const { userId, link, linkText, imgUrl, userName } = body;

    // ✅ Proper validation
    if (!userId || !link || !linkText || !imgUrl || !userName) {
      return NextResponse.json(
        {
          success: false,
          message: "❌ All fields (userId, linkText, link, imgUrl, userName) are required.",
        },
        { status: 400 }
      );
    }

    const result = await collection.insertOne({
      userId,
      link,
      linkText,
      imgUrl,
      userName,
    });

    return NextResponse.json(
      {
        success: true,
        message: "✅ Link added successfully",
        insertedId: result.insertedId.toString(),
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "❌ Failed to add link",
        error: err?.message || "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
