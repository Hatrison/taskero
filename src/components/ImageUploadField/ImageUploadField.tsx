import { useRef, useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { useField } from "formik";
import { FaRegBuilding } from "react-icons/fa";
import {
  FileDropZone,
  HiddenFileInput,
  PreviewImage,
  UploadText,
  UploadButton,
  IconWrapper,
} from "./ImageUploadField.styled";
import { ErrorText } from "@/styles/form/Form.styled";

interface Props {
  name: string;
  placeholderText: string;
  buttonText: string;
  initialPreview?: string | null;
}

const ImageUploadField = ({
  name,
  placeholderText,
  buttonText,
  initialPreview = null,
}: Props) => {
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [field, meta, helpers] = useField(name);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!field.value && initialPreview) {
      setPreview(initialPreview);
    }
  }, [initialPreview, field.value]);

  const handleFileChange = (file: File) => {
    helpers.setValue(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <>
      <FileDropZone
        onClick={() => fileInputRef.current?.click()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          if (file) {
            handleFileChange(file);
          }
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        {preview ? (
          <PreviewImage src={preview} alt="Preview" />
        ) : (
          <>
            <IconWrapper>
              <FaRegBuilding size={48} color={theme.secondaryText} />
            </IconWrapper>
            <UploadText>{placeholderText}</UploadText>
            <UploadButton type="button">{buttonText}</UploadButton>
          </>
        )}
      </FileDropZone>

      <HiddenFileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            handleFileChange(file);
          }
        }}
      />

      {meta.touched && meta.error && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};

export default ImageUploadField;
