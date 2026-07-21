import { memo, useCallback, useMemo, useState } from "react";
import { setComma, classNameBind } from "@/utils/commonUtils";
import Modal from "@/components/common/Modal";
import Tabs from "@/components/common/Tabs";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import * as S from "./style";

/* ------------------------------------------------------------------ *
 * 필터 데이터 (데모용 목 데이터)
 * ------------------------------------------------------------------ */
interface Option {
  value: string;
  name: string;
  count: number;
}

const CATEGORY_OPTIONS: Option[] = [
  { value: "outer", name: "아우터", count: 1835 },
  { value: "knit", name: "니트", count: 468 },
  { value: "tshirt", name: "티셔츠", count: 1092 },
  { value: "onepiece", name: "원피스", count: 312 },
  { value: "pants", name: "팬츠", count: 764 },
  { value: "skirt", name: "스커트", count: 210 },
  { value: "bag", name: "가방", count: 534 },
  { value: "shoes", name: "슈즈", count: 1039 },
];

const COLOR_OPTIONS: (Option & { hex: string })[] = [
  { value: "white", name: "화이트", hex: "#ffffff", count: 300 },
  { value: "black", name: "블랙", hex: "#111111", count: 512 },
  { value: "gray", name: "그레이", hex: "#9ca3af", count: 240 },
  { value: "beige", name: "베이지", hex: "#e0cda9", count: 180 },
  { value: "red", name: "레드", hex: "#df3e3c", count: 97 },
  { value: "blue", name: "블루", hex: "#498df0", count: 130 },
  { value: "green", name: "그린", hex: "#46b01a", count: 88 },
  { value: "yellow", name: "옐로우", hex: "#ffc825", count: 42 },
  { value: "pink", name: "핑크", hex: "#fba8b4", count: 156 },
  { value: "brown", name: "브라운", hex: "#71594f", count: 64 },
];

const BENEFIT_OPTIONS: Option[] = [
  { value: "sale", name: "세일중", count: 211 },
  { value: "coupon", name: "쿠폰", count: 159067 },
  { value: "freeship", name: "무료배송", count: 8302 },
  { value: "exclusive", name: "단독상품", count: 5156 },
  { value: "instock", name: "품절제외", count: 300 },
];

const BRAND_OPTIONS: Option[] = [
  { value: "brand1", name: "브랜드1", count: 100 },
  { value: "brand2", name: "브랜드2", count: 200 },
  { value: "brand3", name: "브랜드3", count: 40 },
  { value: "brand4", name: "브랜드4", count: 10 },
  { value: "brand5", name: "브랜드5", count: 320 },
];

const PRICE_MIN = 0;
const PRICE_MAX = 500000;
const PRICE_STEP = 10000;
const BASE_RESULT = 226203;

const ALL_OPTIONS: Record<string, Option[]> = {
  category: CATEGORY_OPTIONS,
  color: COLOR_OPTIONS,
  benefit: BENEFIT_OPTIONS,
  brand: BRAND_OPTIONS,
};

/* ------------------------------------------------------------------ */

interface Selected {
  category: string[];
  color: string[];
  benefit: string[];
  brand: string[];
  price: [number, number];
}

const initialSelected: Selected = {
  category: [],
  color: [],
  benefit: [],
  brand: [],
  price: [PRICE_MIN, PRICE_MAX],
};

interface IProps {
  /** 모달 열림 여부 */
  isOpen: boolean;
  /** 닫기 */
  onClose: () => void;
  /** 적용 (선택된 필터 전달) */
  onApply?: (selected: Selected) => void;
  /** 모달 크기 */
  size?: "small" | "medium" | "large" | "fullscreen";
}

const FilterModal = ({ isOpen, onClose, onApply, size = "medium" }: IProps) => {
  const [selected, setSelected] = useState<Selected>(initialSelected);

  const isPriceChanged =
    selected.price[0] !== PRICE_MIN || selected.price[1] !== PRICE_MAX;

  // 체크박스형 필터 토글 (category | color | benefit | brand)
  const toggle = useCallback(
    (group: keyof Omit<Selected, "price">, value: string) => {
      setSelected((prev) => {
        const list = prev[group];
        return {
          ...prev,
          [group]: list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value],
        };
      });
    },
    [],
  );

  // 가격 값 갱신 (min은 max를 넘지 못하고, max는 min 밑으로 못 내려감)
  const setPriceValue = useCallback((index: 0 | 1, num: number) => {
    if (Number.isNaN(num)) return;
    setSelected((prev) => {
      const next: [number, number] = [...prev.price];
      if (index === 0) {
        next[0] = Math.min(Math.max(PRICE_MIN, num), prev.price[1]);
      } else {
        next[1] = Math.max(Math.min(PRICE_MAX, num), prev.price[0]);
      }
      return { ...prev, price: next };
    });
  }, []);

  // 숫자 입력창용 (콤마/문자 제거 후 반영)
  const onChangePriceInput = useCallback(
    (index: 0 | 1, raw: string) => {
      setPriceValue(index, Number(raw.replace(/[^\d]/g, "")));
    },
    [setPriceValue],
  );

  const removeChip = useCallback(
    (group: keyof Selected, value?: string) => {
      if (group === "price") {
        setSelected((prev) => ({ ...prev, price: [PRICE_MIN, PRICE_MAX] }));
        return;
      }
      if (value) toggle(group, value);
    },
    [toggle],
  );

  const onReset = useCallback(() => setSelected(initialSelected), []);

  const handleApply = useCallback(() => {
    onApply?.(selected);
    onClose();
  }, [onApply, onClose, selected]);

  // 선택된 필터 → 칩 목록
  const chips = useMemo(() => {
    const list: {
      key: string;
      group: keyof Selected;
      value?: string;
      label: string;
    }[] = [];
    (["category", "color", "benefit", "brand"] as const).forEach((group) => {
      selected[group].forEach((value) => {
        const opt = ALL_OPTIONS[group]?.find((o) => o.value === value);
        if (opt)
          list.push({
            key: `${group}-${value}`,
            group,
            value,
            label: opt.name,
          });
      });
    });
    if (isPriceChanged) {
      list.push({
        key: "price",
        group: "price",
        label: `${setComma(String(selected.price[0]))}~${setComma(
          String(selected.price[1]),
        )}원`,
      });
    }
    return list;
  }, [selected, isPriceChanged]);

  // 결과 수 (데모: 선택이 많을수록 감소)
  const resultCount = useMemo(() => {
    if (chips.length === 0) return BASE_RESULT;
    return Math.max(12, Math.round(BASE_RESULT / (chips.length + 1)));
  }, [chips.length]);

  // 체크박스 리스트 렌더러
  const renderCheckList = (
    group: keyof Omit<Selected, "price">,
    options: Option[],
  ) => (
    <S.Panel>
      <S.CheckList>
        {options.map((opt) => (
          <S.CheckRow key={opt.value}>
            <Checkbox
              value={opt.value}
              checked={selected[group].includes(opt.value)}
              label={opt.name}
              onChange={() => toggle(group, opt.value)}
            />
            <span className="cnt">{setComma(String(opt.count))}</span>
          </S.CheckRow>
        ))}
      </S.CheckList>
    </S.Panel>
  );

  const colorPanel = (
    <S.Panel>
      <S.ColorGrid>
        {COLOR_OPTIONS.map((opt) => (
          <S.ColorItem key={opt.value}>
            <S.Swatch
              type="button"
              $hex={opt.hex}
              $active={selected.color.includes(opt.value)}
              aria-label={opt.name}
              aria-pressed={selected.color.includes(opt.value)}
              onClick={() => toggle("color", opt.value)}
            />
            <span className="name">{opt.name}</span>
            <span className="cnt">{setComma(String(opt.count))}</span>
          </S.ColorItem>
        ))}
      </S.ColorGrid>
    </S.Panel>
  );

  const pricePercent = (v: number) =>
    ((v - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

  const pricePanel = (
    <S.Panel>
      <S.PanelTitle>
        가격 범위 설정
        <span className="sub">천원 단위로 입력해 주세요.</span>
      </S.PanelTitle>
      <S.PriceBox>
        <S.PriceInputs>
          <span className="field">
            <Input
              type="text"
              value={setComma(String(selected.price[0]))}
              onChange={(e) => onChangePriceInput(0, e.target.value)}
            />
            <span className="unit">원</span>
          </span>
          <span className="between">~</span>
          <span className="field">
            <Input
              type="text"
              value={setComma(String(selected.price[1]))}
              onChange={(e) => onChangePriceInput(1, e.target.value)}
            />
            <span className="unit">원</span>
          </span>
        </S.PriceInputs>
        <S.Slider>
          <S.PriceTrack>
            <S.PriceFill
              $left={Math.max(0, pricePercent(selected.price[0]))}
              $right={Math.min(100, pricePercent(selected.price[1]))}
            />
          </S.PriceTrack>
          <input
            type="range"
            className="thumb thumb-min"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={PRICE_STEP}
            value={selected.price[0]}
            aria-label="최소 가격"
            onChange={(e) => setPriceValue(0, Number(e.target.value))}
          />
          <input
            type="range"
            className="thumb thumb-max"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={PRICE_STEP}
            value={selected.price[1]}
            aria-label="최대 가격"
            onChange={(e) => setPriceValue(1, Number(e.target.value))}
          />
        </S.Slider>
      </S.PriceBox>
    </S.Panel>
  );

  const tabs = [
    {
      label: "카테고리",
      content: renderCheckList("category", CATEGORY_OPTIONS),
    },
    { label: "컬러", content: colorPanel },
    { label: "가격", content: pricePanel },
    { label: "상품정보", content: renderCheckList("benefit", BENEFIT_OPTIONS) },
    { label: "브랜드", content: renderCheckList("brand", BRAND_OPTIONS) },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="필터" size={size}>
      <S.FilterModal>
        <Tabs tabs={tabs} />

        {chips.length > 0 && (
          <S.ChipBar>
            <S.ResetBtn type="button" onClick={onReset}>
              <span className="icon">↻</span>
              초기화
            </S.ResetBtn>
            <S.ChipList>
              {chips.map((chip) => (
                <S.Chip key={chip.key} className={classNameBind(["chip"])}>
                  {chip.label}
                  <button
                    type="button"
                    aria-label={`${chip.label} 삭제`}
                    onClick={() => removeChip(chip.group, chip.value)}
                  >
                    ✕
                  </button>
                </S.Chip>
              ))}
            </S.ChipList>
          </S.ChipBar>
        )}

        <S.Footer>
          <S.CancelBtn type="button" onClick={onClose}>
            취소
          </S.CancelBtn>
          <S.SubmitBtn type="button" onClick={handleApply}>
            {setComma(String(resultCount))}개 상품보기
          </S.SubmitBtn>
        </S.Footer>
      </S.FilterModal>
    </Modal>
  );
};

export default memo(FilterModal);
