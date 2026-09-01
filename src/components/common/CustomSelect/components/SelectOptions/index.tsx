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

export interface IProps {
  /** 노출할 옵션 목록 */
  options: CustomSelectOption[];
  /** 옵션 선택 (disabled 옵션은 호출되지 않음) */
  onSelect: (option: CustomSelectOption) => void;
  /** CSS 클래스명 */
  className?: string;
}

/** CustomSelect 헤더를 눌렀을 때 펼쳐지는 옵션 영역 */
const SelectOptions = ({ options, onSelect, className = "" }: IProps) => {
  const handleOptionClick = (opt: CustomSelectOption) => {
    if (opt.disabled) return;
    onSelect(opt);
  };

  return (
    <S.OptionsList className={`custom_select_options ${className}`}>
      {options.map((opt) => (
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
            <S.RestockAlarmBtn
              type="button"
              className="restock_alarm_btn"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = opt.restockUrl as string;
              }}
            >
              재입고 알림
            </S.RestockAlarmBtn>
          )}
        </S.Option>
      ))}
    </S.OptionsList>
  );
};

export default SelectOptions;
