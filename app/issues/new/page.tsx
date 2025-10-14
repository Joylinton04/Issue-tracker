"use client";
import { TextField } from "@radix-ui/themes";
import React from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Dynamically import SimpleMDE with ssr: false
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface FormProp {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, handleSubmit, control } = useForm<FormProp>();
  const navigate = useRouter()

  const onSubmit = async (data: FormProp) => {
    try {
      await axios.post('/api/issues', data)
      navigate.push('/issues')
      toast.success("Issue Added")
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong")
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl space-y-4"
    >
      <TextField.Root
        placeholder="title"
        {...register("title")}
      ></TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <button type="submit" className="btn btn-primary rounded">
        Submit New Issue
      </button>
    </form>
  );
};

export default NewIssuePage;
