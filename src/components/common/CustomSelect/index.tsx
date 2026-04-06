import React, { useState, useRef, useEffect } from "react";
import * as S from "./style";

export interface CustomSelectOption {
  value: string;
  label: string;
  optionvalue?: string;
  disabled?: boolean;
  deliveryDate?: string;
  surcharge?: string;
  restockBtn?: boolean;
  restockUrl?: string;
}

export interface CustomSelectProps {
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "옵션을 선택하세요",
  disabled = false,
  className = "",
}) => {
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
  const handleOptionClick = (opt: CustomSelectOption) => {
    if (opt.disabled) return;
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
      </S.Header>
      {open && (
        <S.OptionsList className="custom_select_options">
          {filteredOptions.map((opt) => (
            <S.Option
              key={opt.optionvalue ?? opt.value}
              className={`custom_select_option${opt.disabled ? " disabled" : ""}${opt.deliveryDate ? " scheduled_delivery" : ""}`}
              onClick={() => handleOptionClick(opt)}
            >
              <span className="option_name">{opt.label}</span>
              {opt.deliveryDate && (
                <em className="delivery_date">{opt.deliveryDate}</em>
              )}
              {opt.surcharge && <em className="surcharge">{opt.surcharge}</em>}
              {opt.restockBtn && opt.restockUrl && (
                <button
                  type="button"
                  className="restock_alarm_btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = opt.restockUrl!;
                  }}
                >
                  재입고 알림
                </button>
              )}
            </S.Option>
          ))}
        </S.OptionsList>
      )}
    </S.Wrapper>
  );
};

export default CustomSelect;
