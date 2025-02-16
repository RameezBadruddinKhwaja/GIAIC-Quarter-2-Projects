// types.ts
export type Post = {
    id: string;
    title: string;
    content: string;
    author: string; // username
    createdAt: string;
  };
  
  export type User = {
    id: string;
    username: string;
    password: string; // plaintext for demo (NEVER do this in production)
    token: string;
  };
  