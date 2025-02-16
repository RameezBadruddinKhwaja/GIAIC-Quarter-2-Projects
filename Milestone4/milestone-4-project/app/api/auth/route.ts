// app/api/auth/route.ts
import { NextResponse } from "next/server";
import { validateUser, createUser, getUserByUsername } from "../../../lib/users";

export async function POST(request: Request) {
  const { action, username, password } = await request.json();

  if (action === "login") {
    const user = validateUser(username, password);
    if (user) {
      return NextResponse.json({
        user: { id: user.id, username: user.username, token: user.token },
      });
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } else if (action === "signup") {
    if (getUserByUsername(username)) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
    const newUser = createUser(username, password);
    return NextResponse.json({
      user: { id: newUser.id, username: newUser.username, token: newUser.token },
    });
  }
  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
