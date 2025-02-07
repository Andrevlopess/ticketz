import { NextRequest, NextResponse } from "next/server";

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
];

interface PageParams {
  userId: string;
}

export function GET(request: NextRequest, { params }: { params: PageParams }) {
  try {
    const user = users.find((user) => user.id === Number(params.userId));

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
