import clientPromise from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

// ✅ POST: Create a new todo
export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const todosCollection = db.collection("todos");

    const body = await req.json();

    const newTodo = {
      title: body.title,
      completed: body.completed ?? false,
      priority: body.priority ?? "medium",
      createdAt: new Date(),
    };

    const result = await todosCollection.insertOne(newTodo);

    return NextResponse.json(
      {
        message: "Todo created successfully",
        data: { _id: result.insertedId, ...newTodo },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating todo!", error);
    return NextResponse.json(
      { error: "Failed to create todo!" },
      { status: 500 }
    );
  }
}

// ✅ GET: Fetch all todos
export async function GET() {
  try {
    const client = await clientPromise;
    // console.log(client);
    const db = client.db();
    const todosCollection = db.collection("todos");

    const todos = await todosCollection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      message: "Todos fetched successfully!",
      data: todos,
    });
  } catch (error) {
    console.error("Error fetching todos!", error);
    return NextResponse.json(
      { error: "Failed to fetch todos!" },
      { status: 500 }
    );
  }
}
