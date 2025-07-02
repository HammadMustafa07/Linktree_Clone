import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const {searchParams} = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("linktree_clone_project");
    const collection = db.collection("links");

    const data = await collection.find({userId}).toArray()
    return NextResponse.json({success: true, message : "✅ Data got successfully", data})
  } catch (err) {
    return NextResponse.json({success : false, error : err.message})
  }
}
