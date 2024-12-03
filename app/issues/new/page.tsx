"use client";

import { Box, Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl flex flex-col gap-y-4">
      <TextField.Root radius="large" placeholder="Title" />
      <SimpleMDE placeholder="Description" />
      <Button>Sumit issue</Button>
    </div>
  );
};

export default NewIssuePage;
