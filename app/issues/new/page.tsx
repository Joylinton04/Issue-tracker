"use client";
import { TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import z from "zod";
import { issueSchema } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

// Dynamically import SimpleMDE with ssr: false
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewIssuePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof issueSchema>>({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const navigate = useRouter();

  const onSubmit = async (data: z.infer<typeof issueSchema>) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/issues", data);
      navigate.push("/issues");
      toast.success("Issue Added");
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-4">
      <TextField.Root
        placeholder="title"
        {...register("title")}
      ></TextField.Root>
      {errors.title && (
        <p className="-mt-2 text-red-500">{errors.title.message}</p>
      )}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      {errors.description && (
        <p className="-mt-6 text-red-500">{errors.description.message}</p>
      )}
      <button
        type="submit"
        className="btn btn-primary rounded"
        disabled={isSubmitting}
      >
        Submit New Issue
        {isSubmitting && <span className="loading loading-spinner"></span>}
      </button>
    </form>
  );
};

export default NewIssuePage;
