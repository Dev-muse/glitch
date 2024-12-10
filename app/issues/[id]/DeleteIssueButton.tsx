import { Button } from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button size={"2"} color="red">
      Delete
    </Button>
  );
};

export default DeleteIssueButton;
