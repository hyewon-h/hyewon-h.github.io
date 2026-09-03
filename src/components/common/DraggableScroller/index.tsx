import React, { useRef, useState, useEffect, useCallback } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import * as S from "./style";

/** react-use-draggable-scroll safeDisplacement 기본값과 맞춤 */
const DRAG_THRESHOLD_PX = 10;

export interface IProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PC에서 마우스로 끌어서 가로 스크롤하는 래퍼
 * - 터치 스크롤은 브라우저 기본 동작을 그대로 사용
 * - 드래그 거리가 threshold를 넘어야 dragging 상태로 보고 클릭을 막는다
 */
const DraggableScroller: React.FC<IProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const startPosRef = useRef({ x: 0, y: 0 });
  const { events } = useDraggable(
    ref as React.MutableRefObject<HTMLDivElement>,
  );
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !ref.current) return;

      const movedX = Math.abs(e.clientX - startPosRef.current.x);
      const movedY = Math.abs(e.clientY - startPosRef.current.y);
      const hasMovedPastThreshold =
        movedX > DRAG_THRESHOLD_PX || movedY > DRAG_THRESHOLD_PX;

      // 클릭(미세 움직임)과 드래그를 구분. threshold 전에 pointer-events:none 하면 탭 클릭이 막힌다
      if (hasMovedPastThreshold) {
        ref.current.classList.add("dragging");
      }
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    ref.current?.classList.remove("dragging");
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      startPosRef.current = { x: e.clientX, y: e.clientY };
      setIsDragging(true);
      events.onMouseDown?.(e);
    },
    [events],
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <S.DraggableScroller
      className={`${className || ""} ${isDragging ? "grabbing" : ""}`}
    >
      <S.List
        className="draggable-scroller"
        {...events}
        ref={ref}
        onMouseDown={handleMouseDown}
      >
        {children}
      </S.List>
    </S.DraggableScroller>
  );
};

export default DraggableScroller;
