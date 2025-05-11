import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  Wrapper,
  Trigger,
  Dropdown,
  Option,
  Label,
} from "./CustomSelect.styled";

type Props<T> = {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getLabel: (item: T) => string;
  getKey: (item: T) => string;
  placeholder?: string;
};

const CustomSelect = <T,>({
  options,
  value,
  onChange,
  getLabel,
  getKey,
  placeholder = "Select...",
}: Props<T>) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Trigger
        onClick={() => setOpen((prev) => !prev)}
        title={value ? getLabel(value) : ""}
      >
        <Label>{value ? getLabel(value) : placeholder}</Label>
        <FiChevronDown
          size={16}
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </Trigger>

      {open && (
        <Dropdown>
          {options.map((item) => (
            <Option
              key={getKey(item)}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
            >
              {getLabel(item)}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default CustomSelect;
