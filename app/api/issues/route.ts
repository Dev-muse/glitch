import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/app/validationSchemas";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // zod validation
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    // 400 : client sent invalid data
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  // data is valid insert the data, create issue
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  revalidatePath("/issues");

  return NextResponse.json(newIssue, { status: 201 });
}
