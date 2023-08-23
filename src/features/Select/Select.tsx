import { useState, useEffect, useRef } from "react";
import styles from "./select.module.css";
type SelectOption = {
  label: string;
  value: string | number;
};
type SingleSelectProps = {
  onChange: (value: SelectOption | undefined) => void;
  value?: SelectOption;
  multiple?: false;
};

type MultipleSelectProps = {
  onChange: (value: SelectOption[]) => void;
  value: SelectOption[];
  multiple: true;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearOptions = (e: React.MouseEvent) => {
    e.stopPropagation();
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = (option: SelectOption, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (option === value) return;
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      onChange(option);
    }
    setIsOpen(false);
  };

  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value.includes(option) : option === value;
  };

  useEffect(() => {
    setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <>
      <div>temp</div>
      <div
        onBlur={() => setIsOpen(false)}
        tabIndex={0}
        className={styles.container}
        onClick={() => setIsOpen((prev) => !prev)}
        ref={containerRef}
      >
        <span className={styles.value}>
          {multiple
            ? value.map((v) => (
                <button
                  className={styles["option-badge"]}
                  key={v.value}
                  onClick={(e) => {
                    selectOption(v, e);
                  }}
                >
                  {v.label}
                  <span className={styles["remove-btn"]}>&times;</span>
                </button>
              ))
            : value?.label}
        </span>
        <button onClick={clearOptions} className={styles["clear-btn"]}>
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
          {options.map((option, index) => (
            <li
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={(e) => selectOption(option, e)}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } ${index === highlightedIndex ? styles.highlighted : ""}`}
              key={option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
