import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("linktree_clone_project");
    const collection = db.collection("links");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Link not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "✅ Link deleted successfully",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "❌ Failed to delete link",
        error: err?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
