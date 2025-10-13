"use client";
import { Button, TextField } from "@radix-ui/themes";
import React, { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

// Dynamically import SimpleMDE with ssr: false
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewIssuePage = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Submitting Issue:", { description });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <TextField.Root placeholder="title"></TextField.Root>

      <SimpleMDE
        value={description}
        onChange={(e) => setDescription(e)}
        placeholder="Description"
      />

      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
