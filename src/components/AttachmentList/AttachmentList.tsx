import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import ImageGallery from "./ImageGallery";
import {
  List,
  RemoveButton,
  Thumb,
  HiddenInput,
  FileInputZone,
  Wrapper,
} from "./AttachmentList.styled";

export interface Attachment {
  url: string;
  file?: File;
}

type Props = {
  files: Attachment[];
  editable?: boolean;
  onChange: (files: Attachment[]) => void;
}

const AttachmentList = ({ files, editable, onChange }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const { t } = useTranslation();

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newAttachments: Attachment[] = Array.from(e.target.files).map(
      (file) => ({
        url: URL.createObjectURL(file),
        file,
      })
    );

    onChange([...files, ...newAttachments]);
    e.target.value = "";
  };

  const handleRemove = (idx: number) => {
    const updated = files.filter((_, i) => i !== idx);
    onChange(updated);
  };

  const handleFiles = useCallback(
    (fileList: FileList) => {
      const newAttachments: Attachment[] = Array.from(fileList).map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));
      onChange([...files, ...newAttachments]);
    },
    [files, onChange]
  );

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
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <Wrapper>
      <List>
        {files.map((att, idx) => (
          <Thumb key={idx} onClick={() => setGalleryIndex(idx)}>
            <img src={att.url} alt={`attachment-${idx}`} />
            {editable && (
              <RemoveButton
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(idx);
                }}
              >
                <FiX size={20} />
              </RemoveButton>
            )}
          </Thumb>
        ))}
      </List>
      {editable && (
        <>
          <HiddenInput
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileInput}
          />
          <FileInputZone
            isDragActive={dragActive}
            onClick={() => fileInputRef.current?.click()}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}
          >
            {t("Forms.editTask.dragOrClick")}
          </FileInputZone>
        </>
      )}

      {galleryIndex !== null && (
        <ImageGallery
          images={files.map((f) => f.url)}
          startIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </Wrapper>
  );
};

export default AttachmentList;
