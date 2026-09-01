import { useState, useRef, useEffect } from "react";
import SelectOptions, { CustomSelectOption } from "./components/SelectOptions";
import * as S from "./style";

export type { CustomSelectOption };

export interface IProps {
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const CustomSelect = ({
  options,
  value,
  onChange,
  placeholder = "옵션을 선택하세요",
  disabled = false,
  className = "",
}: IProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 선택된 옵션
  const selectedOption = options.find(
    (opt) => (opt.optionvalue ?? opt.value) === value,
  );

  // 헤더 텍스트
  const headerText =
    selectedOption && value ? selectedOption.label : placeholder;

  // 옵션 클릭
  const handleSelect = (opt: CustomSelectOption) => {
    onChange(opt.optionvalue ?? opt.value);
    setOpen(false);
  };

  const filteredOptions = options.filter(
    (opt) => !!(opt.optionvalue || opt.value),
  );

  return (
    <S.Wrapper
      className={`custom_select_wrapper ${className} ${disabled ? "disabled" : ""} ${open ? "active" : ""}`}
      ref={wrapperRef}
    >
      <S.Header
        className={`custom_select_header${!value ? " placeholder" : ""}`}
        onClick={() => !disabled && setOpen((v) => !v)}
      >
        {headerText}
        <S.ArrowIcon aria-hidden="true" />
      </S.Header>
      {open && (
        <SelectOptions options={filteredOptions} onSelect={handleSelect} />
      )}
    </S.Wrapper>
  );
};

export default CustomSelect;
