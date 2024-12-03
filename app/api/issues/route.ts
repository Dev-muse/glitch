import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  // zod validation
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    // 400 : client sent invalid data
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  // data is valid insert the data, create issue
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
