// lib/users.ts
import { User } from "../types";

let users: User[] = [
  // Predefined admin user for demo
  {
    id: "1",
    username: "admin",
    password: "admin",
    token: "fake-token-admin",
  },
];

export function getUserByUsername(username: string): User | undefined {
  return users.find((user) => user.username === username);
}

export function createUser(username: string, password: string): User {
  const newUser: User = {
    id: String(Date.now()),
    username,
    password,
    token: "fake-token-" + username,
  };
  users.push(newUser);
  return newUser;
}

export function validateUser(username: string, password: string): User | null {
  const user = getUserByUsername(username);
  if (user && user.password === password) {
    return user;
  }
  return null;
}
