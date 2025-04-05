import React from "react";
import { useForm } from "react-hook-form";

export default function SubmissionForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const response = await fetch("http://localhost:8082/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Book added successfully!");
    } else {
      alert("Failed to add book.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} placeholder="Title" required />
      <p><input {...register("isbn")} placeholder="ISBN" required /></p>
      <p><input {...register("author")} placeholder="Author" /></p>
      <p><input {...register("description")} placeholder="Description" /></p>
      <p><input type="date" {...register("published_date")} /></p>
      <p><input {...register("publisher")} placeholder="Publisher" /></p>
      <input type="submit" value="Add Book" />
    </form>
  );
}
