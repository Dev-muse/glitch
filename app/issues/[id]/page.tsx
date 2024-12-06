import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  // check if params is true string
  if (isNaN(parseInt(params.id))) notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
