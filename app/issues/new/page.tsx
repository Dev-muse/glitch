"use client";

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import SimpleMDE from "react-simplemde-editor";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";

// interface IssueForm {
//   title: string;
//   description: string;
// }
// infer issue form type from zod schema
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    // used hookform resolvers to integrate react-hook-form with outside validators like zod
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();

  return (
    <div className="max-w-xl  ">
      {error && (
        <Callout.Root color="red" variant="soft" className="mb-5">
          <Callout.Icon>
            <MdErrorOutline />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occurred.");
          }
        })}
        className="flex flex-col gap-y-4"
      >
        <TextField.Root placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button size={"3"}>Sumit issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
