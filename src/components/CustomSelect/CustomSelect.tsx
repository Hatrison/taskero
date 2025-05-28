import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiChevronDown } from "react-icons/fi";
import {
  Wrapper,
  Trigger,
  Dropdown,
  Option,
  Label,
  ColorDot,
} from "./CustomSelect.styled";

type Props<T> = {
  options: T[];
  value: T | null;
  onChange: (value: T) => void;
  getLabel: (item: T) => string;
  getKey: (item: T) => string;
  getColor?: (item: T) => string;
  placeholder?: string;
  disabled?: boolean;
};

const CustomSelect = <T,>({
  options,
  value,
  onChange,
  getLabel,
  getKey,
  getColor,
  placeholder = "Select...",
  disabled = false,
}: Props<T>) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [dropdownPos, setDropdownPos] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !containerRef.current?.contains(target) &&
        !dropdownRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <Wrapper ref={containerRef}>
      <Trigger
        type="button"
        ref={triggerRef}
        onClick={() => {
          if (!disabled) setOpen((prev) => !prev);
        }}
        title={value ? getLabel(value) : ""}
        disabled={disabled}
      >
        {value && getColor && <ColorDot color={getColor(value)} />}
        <Label>{value ? getLabel(value) : placeholder}</Label>
        {!disabled && (
          <FiChevronDown
            size={16}
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        )}
      </Trigger>

      {open &&
        createPortal(
          <Dropdown
            ref={dropdownRef}
            $top={dropdownPos.top}
            $left={dropdownPos.left}
            $width={dropdownPos.width}
          >
            {options.map((item) => (
              <Option
                key={getKey(item)}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                {getColor && <ColorDot color={getColor(item)} />}
                {getLabel(item)}
              </Option>
            ))}
          </Dropdown>,
          document.body
        )}
    </Wrapper>
  );
};

export default CustomSelect;
