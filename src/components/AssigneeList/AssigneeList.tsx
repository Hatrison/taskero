import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { searchProjectMembers } from "@/redux/projects/operations";
import { selectCurrentProject } from "@/redux/projects/selectors";
import { UserBase } from "@/redux/user/user.types";
import UserList from "@/components/UserList";
import {
  Wrapper,
  Dropdown,
  Option,
} from "@/components/CustomSelect/CustomSelect.styled";

type Props = {
  value: UserBase[];
  onChange: (updated: UserBase[]) => void;
  placeholder?: string;
};

const AssigneeList = ({
  value,
  onChange,
  placeholder = "Search...",
}: Props) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectCurrentProject);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<UserBase[]>([]);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (!query.trim() || !project?._id) {
      setResults([]);
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(async () => {
      try {
        const data = await dispatch(
          searchProjectMembers({ projectId: project._id, query })
        ).unwrap();
        setResults(data);
        setOpen(true);
      } catch (error) {
        toast.error(
          `${t("Forms.createTask.searchFailed")}: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
        setResults([]);
      }
    }, 400);

    return () => clearTimeout(timeoutRef.current);
  }, [query, project, dispatch, t]);

  useEffect(() => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [open, results]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !inputRef.current?.contains(target) &&
        !dropdownRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (user: UserBase) => {
    if (!value.find((u) => u._id === user._id)) {
      onChange([...value, user]);
    }
    setQuery("");
    setResults([]);
    setOpen(false);
  };

  return (
    <>
      <Wrapper>
        <input
          ref={inputRef}
          value={query}
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length && setOpen(true)}
          style={{
            width: "100%",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        {open &&
          createPortal(
            <Dropdown
              ref={dropdownRef}
              $top={position.top}
              $left={position.left}
              $width={position.width}
            >
              {results.map((user) => (
                <Option key={user._id} onClick={() => handleSelect(user)}>
                  {user.name} ({user.email})
                </Option>
              ))}
            </Dropdown>,
            document.body
          )}
      </Wrapper>
      <UserList
        users={value}
        withActions={true}
        onChange={(updatedUsers) => onChange(updatedUsers as UserBase[])}
        viewMode
      />
    </>
  );
};

export default AssigneeList;
