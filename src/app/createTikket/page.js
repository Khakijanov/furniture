"use client";
import { useState } from "react";
import FormInput from "../components/FormInput";
import TextArea from "../components/TextArea";
import SelectForm from "../components/SelectForm";
import { useRouter } from "next/navigation";

function CreateTiket() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    priority: "",
    user_email: "",
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} ni to'ldiring`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({
        title: "",
        body: "",
        priority: "",
        user_email: "",
      });
      setErrors({});
      router.push("/");
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-full">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 border p-5 flex flex-col gap-3 rounded-lg mx-auto"
      >
        <FormInput
          name="title"
          label="Title:"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title..."
          error={errors.title}
        />
        <TextArea
          name="body"
          label="Description:"
          value={formData.body}
          placeholder="Body..."
          onChange={handleInputChange}
          error={errors.body}
        />
        <SelectForm
          error={errors.priority}
          name="priority"
          value={formData.priority}
          onChange={handleInputChange}
        />
        <FormInput
          name="user_email"
          label="User Email:"
          value={formData.user_email}
          placeholder="Email..."
          onChange={handleInputChange}
          error={errors.user_email}
        />
        <button type="submit" className="btn btn-primary">
          Create Ticket
        </button>
      </form>
    </div>
  );
}

export default CreateTiket;
