import { API_BASE_URL } from "@/utils";
import { FormFieldType } from "@/utils/types";
import { useState } from "react";

export const useForm = (fields: FormFieldType[]) => {
  const initialState = Object.fromEntries(fields.map(({ name }) => [name, ""]));
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const validateField = (name: string, value: string) =>
    fields.find((field) => field.name === name)?.validate?.(value) || "";

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setFormData(initialState);
      setSubmitStatus({ success: true, message: "Submission successful!" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to submit the form. Please try again.",
      });
      console.error("Submission error:", error);
    } finally {
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  const isSubmitDisabled = fields.some(
    ({ name }) => errors[name] || !formData[name]?.trim()
  );

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
    submitStatus,
  };
};
