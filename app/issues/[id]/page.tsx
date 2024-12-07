import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
    <Grid columns={{ initial: "1", md: "2" }} gap={"5"}>
      <Box width={"500px"}>
        <Heading>{issue.title}</Heading>
        <Flex gap={"4"} my={"2"}>
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.updatedAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt={"4"}>
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button size={"3"}>
          <Pencil2Icon /> Edit Issue
          <Link href={`/issues/${issue.id}/edit`}></Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
