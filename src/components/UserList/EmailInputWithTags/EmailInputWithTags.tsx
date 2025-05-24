import { useState, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Input, RemoveBtn, Tag, Wrapper } from "./EmailInputWithTags.styled";

interface Props {
  pending: string[];
  onPendingChange: (emails: string[]) => void;
  placeholder?: string;
}

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const EmailInputWithTags = ({
  pending,
  onPendingChange,
  placeholder,
}: Props) => {
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (["Enter", "Tab", ","].includes(e.key)) {
      e.preventDefault();

      const email = input.trim().replace(/,+$/, "");

      if (!email) return;

      if (!isValidEmail(email)) {
        toast.error(t("Forms.common.invalidEmail") as string);
        return;
      }

      if (pending.includes(email)) {
        toast.info(t("Forms.common.alreadyInPending") as string);
        setInput("");
        return;
      }

      onPendingChange([...pending, email]);
      setInput("");
    }
  };

  const handleRemove = (emailToRemove: string) => {
    onPendingChange(pending.filter((email) => email !== emailToRemove));
  };

  return (
    <Wrapper>
      {pending.map((email) => (
        <Tag key={email}>
          {email}
          <RemoveBtn onClick={() => handleRemove(email)}>&times;</RemoveBtn>
        </Tag>
      ))}
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default EmailInputWithTags;
