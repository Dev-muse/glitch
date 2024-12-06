import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesActions = () => {
  return (
    <div className="mb-5">
      <Button size={"3"}>
        <Link href={"/issues/new"}>New issue</Link>
      </Button>
    </div>
  );
};

export default IssuesActions;
