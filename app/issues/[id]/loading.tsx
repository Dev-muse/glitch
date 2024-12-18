import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Box, Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Skeleton } from "@/app/components";

const Loading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap={"4"} my={"2"}>
        <Skeleton width={"5rem"} />
        <Skeleton width={"8rem"} />
      </Flex>
      <Card className="prose" mt={"4"}>
        <Skeleton count={4} />
      </Card>
    </Box>
  );
};

export default Loading;
