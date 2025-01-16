import { useForm } from "@/hooks/useForm";
import { FormFieldType } from "@/utils/types";
import { FormField } from "./FormField";

export const Form = ({ formFields }: { formFields: FormFieldType[] }) => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isSubmitDisabled,
    submitStatus,
  } = useForm(formFields);

  return (
    <form className="form mx-auto w-full max-w-[800px]" onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <FormField
          key={field.name}
          {...field}
          value={formData[field.name]}
          onChange={handleChange}
          error={errors[field.name]}
        />
      ))}

      {submitStatus && (
        <p
          className={`text-sm mb-4 ${
            submitStatus.success ? "text-green-500" : "text-red-500"
          }`}
        >
          {submitStatus.message}
        </p>
      )}

      <div className="text-right border-b">
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`text-primary hover:text-secondary ${
            isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
};
