import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import MenuBarSwiper, {
  type MenuBarItem,
} from "@/components/common/MenuBarSwiper";
import { IconArrowBottom01 } from "@/components/common/svg";
import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

interface IProps {
  items: MenuBarItem[];
  selectedValue?: string | number;
  onChange?: (value: string | number) => void;
  align?: "center" | "left";
  speed?: number;
  className?: string;
}

const CategoryMenuBar = ({
  items,
  selectedValue,
  onChange,
  align = "center",
  speed = 300,
  className,
}: IProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const checkOverflow = useCallback(() => {
    const root = wrapRef.current;
    if (!root) return;

    const swiperEl = root.querySelector<HTMLElement>(".swiper");
    const wrapperEl = root.querySelector<HTMLElement>(".swiper-wrapper");

    if (!swiperEl || !wrapperEl) {
      return;
    }

    setIsOverflow(swiperEl.clientWidth < wrapperEl.scrollWidth);
  }, []);

  useEffect(() => {
    checkOverflow();
  }, [checkOverflow, items]);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return undefined;

    const swiperEl = root.querySelector<HTMLElement>(".swiper");
    const wrapperEl = root.querySelector<HTMLElement>(".swiper-wrapper");

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => checkOverflow())
        : undefined;

    if (swiperEl && resizeObserver) resizeObserver.observe(swiperEl);
    if (wrapperEl && resizeObserver) resizeObserver.observe(wrapperEl);

    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
      resizeObserver?.disconnect();
    };
  }, [checkOverflow]);

  useEffect(() => {
    if (!isOverflow && isOpen) {
      setIsOpen(false);
    }
  }, [isOverflow, isOpen]);

  const handleSelect = useCallback(
    (value: string | number) => {
      onChange?.(value);
      setIsOpen(false);
    },
    [onChange],
  );

  const showFoldBtn = isOverflow;

  const classNames = classNameBind([
    "category-menubar",
    showFoldBtn ? "now-fold" : "",
    isOpen ? "is-open" : "",
    className || "",
  ]);

  const renderedItems = useMemo(
    () =>
      items.map((item) => {
        const isActive = String(item.value) === String(selectedValue);

        return (
          <button
            key={item.value}
            type="button"
            className={classNameBind(["item", isActive ? "active" : ""])}
            onClick={() => handleSelect(item.value)}
          >
            <span className="area-click">{item.label}</span>
          </button>
        );
      }),
    [handleSelect, items, selectedValue],
  );

  return (
    <S.CategoryMenuBar className={classNames} ref={wrapRef}>
      {!isOpen && (
        <MenuBarSwiper
          className="menu-core"
          items={items}
          selectedValue={selectedValue}
          onChange={handleSelect}
          align={align}
          speed={speed}
        />
      )}

      {isOpen && <div className="menu-expanded">{renderedItems}</div>}

      {showFoldBtn && (
        <button
          type="button"
          className="fold-btn"
          aria-expanded={isOpen}
          aria-label={isOpen ? "메뉴 접기" : "메뉴 펼치기"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <IconArrowBottom01 />
        </button>
      )}
    </S.CategoryMenuBar>
  );
};

export default memo(CategoryMenuBar);
