import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongoDB";
import { ObjectId } from "mongodb";

// Type for Todo update
type TodoUpdate = {
  title?: string;
  completed?: boolean;
  priority?: "low" | "medium" | "high";
};

// GET one todo
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db();
    const todosCollection = db.collection("todos");

    const todo = await todosCollection.findOne({ _id: new ObjectId(id) });

    if (!todo) {
      return NextResponse.json({ error: "Todo not found!" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo retrieved successfully!", data: todo },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching todo:", error);
    return NextResponse.json(
      { error: "Failed to fetch todo" },
      { status: 500 }
    );
  }
}

// PATCH to update todo
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const body: TodoUpdate = await req.json();
    const client = await clientPromise;
    const db = client.db();
    const todosCollection = db.collection("todos");

    const updateData: TodoUpdate = {};
    if (body.title !== undefined) updateData.title = body.title;
    if (body.completed !== undefined) updateData.completed = body.completed;
    if (body.priority !== undefined) updateData.priority = body.priority;

    const result = await todosCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json({ error: "Todo not found!" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo updated successfully", data: result.value },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

// DELETE todo
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db();
    const todosCollection = db.collection("todos");

    const result = await todosCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Todo not found!" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}
