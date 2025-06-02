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

type Props = {
  name: string;
  placeholderText: string;
  buttonText: string;
  initialPreview?: string | null;
};

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
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (!field.value && initialPreview) {
      setPreview(initialPreview);
    }
  }, [initialPreview, field.value]);

  const handleFileChange = (file: File) => {
    helpers.setValue(file);
    setPreview(URL.createObjectURL(file));
  };

  const onDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };
  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  return (
    <>
      <FileDropZone
        onClick={() => fileInputRef.current?.click()}
        isDragActive={dragActive}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
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
