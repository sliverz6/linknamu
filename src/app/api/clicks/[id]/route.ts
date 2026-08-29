import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const collection = await getClicksCollection();

  const result = await collection.findOneAndUpdate(
    { linkId: params.id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
