import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React, { ReactNode } from "react";

//record type , key:value pair.
// In this example key is status type from prisma and value is object with label & color

const statusMap: Record<
  Status,
  { label: string; color: "red" | "amber" | "green" }
> = {
  OPEN: {
    label: "Open",
    color: "red",
  },
  CLOSED: {
    label: "Closed",
    color: "green",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "amber",
  },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
