import React, { ForwardedRef, forwardRef, memo } from "react";

import { classNameBind } from "@/utils/commonUtils";

import * as S from "./style";

interface IProps {
  className?: string;
  align?: string;
  children?: React.ReactNode;
  perView?: number;
  rowGap?: number;
  colGap?: number;
  md?: { perView?: number; rowGap?: number; colGap?: number };
  xl?: { perView?: number; rowGap?: number; colGap?: number };
  style?: React.CSSProperties;
}

const ItemsGrid = forwardRef(
  (
    {
      className,
      align = "start",
      children,
      perView = 2,
      rowGap = 0,
      colGap = 0,
      md = { perView, rowGap: 0, colGap: 0 },
      xl = { perView, rowGap: 0, colGap: 0 },
      style,
    }: IProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const cName = classNameBind(["items-grid list", className || ""]);

    const param = {
      className: cName,
      $align: align,
      $perView: perView,
      $rowGap: rowGap,
      $colGap: colGap,
      $md: md,
      $xl: xl,
    };

    return (
      <S.ItemsGrid ref={ref} {...param} style={style}>
        {children}
      </S.ItemsGrid>
    );
  },
);

ItemsGrid.displayName = "ItemsGrid";

export default memo(ItemsGrid);
