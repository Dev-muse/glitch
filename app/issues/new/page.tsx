"use client";

import { Box, Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl flex flex-col gap-y-4">
      <TextField.Root radius="large" placeholder="Title" />
      <TextArea placeholder="description" />
      <Button>Sumit issue</Button>
    </div>
  );
};

export default NewIssuePage;
