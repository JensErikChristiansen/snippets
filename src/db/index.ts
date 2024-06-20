import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: "Title",
    code: 'const asdf = () => { console.log("hi!") };',
  },
});
