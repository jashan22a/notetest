"use client";
import { FormControl } from "@mui/material";
import { Controller } from "react-hook-form";
import dynamic from "next/dynamic";

// Dynamically import the QuillEditor component to avoid server-side issues
const QuillEditor = dynamic(() => import('./QuillEditor'), { ssr: false });

export default function FormInput({
  name,
  errors,
  control,
  label,
  inputType,
  className,
  defaultValue,
  placeholder,
  value,
  rows,
  multiline,
}) {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
          <QuillEditor
            {...field}
            value={value || field.value}
            error={!!errors?.[name]}
            helperText={errors?.[name]?.message}
            label={label}
            placeholder={placeholder}
            rows={rows}
            multiline={multiline}
          />
        )}
      />
    </FormControl>
  );
}
