import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IS_BROWSER } from "@/utils/commonUtils";
import { IconX } from "@/components/common/svg";
import * as S from "./style";
import type { ToastType } from "./style";

export type { ToastType };

interface ToastData {
  id: number;
  type: ToastType;
  message: React.ReactNode;
  duration: number;
  closing: boolean;
}

export interface ShowToastOptions {
  /** 토스트 종류 (기본: 'info') */
  type?: ToastType;
  /** 자동 사라짐 시간(ms). 0이면 수동으로만 닫힘 (기본: 3000) */
  duration?: number;
}

interface ToastContextValue {
  /** 토스트 노출 → 생성된 id 반환 */
  showToast: (message: React.ReactNode, options?: ShowToastOptions) => number;
  /** 특정 토스트 즉시 제거 */
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

// 종류별 아이콘 심볼
const ICON_SYMBOL: Record<ToastType, string> = {
  success: "✓",
  error: "✕",
  info: "i",
  warning: "!",
};

export interface IProps {
  /** ToastProvider 하위 트리 */
  children: React.ReactNode;
}

const EXIT_DURATION = 200; // style.ts fadeOut 시간과 동기화

export const ToastProvider = ({ children }: IProps) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const idRef = useRef(0);
  // setTimeout 핸들 보관 (언마운트/수동 제거 시 정리)
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const clearTimer = useCallback((id: number) => {
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  // 실제 언마운트: 퇴장 애니메이션을 재생한 뒤 목록에서 제거
  const removeToast = useCallback(
    (id: number) => {
      clearTimer(id);
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, closing: true } : toast,
        ),
      );
      const exitTimer = setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, EXIT_DURATION);
      timers.current.set(id, exitTimer);
    },
    [clearTimer],
  );

  const showToast = useCallback(
    (message: React.ReactNode, options?: ShowToastOptions) => {
      const id = ++idRef.current;
      const duration = options?.duration ?? 3000;
      const toast: ToastData = {
        id,
        type: options?.type ?? "info",
        message,
        duration,
        closing: false,
      };
      setToasts((prev) => [...prev, toast]);

      if (duration > 0) {
        const timer = setTimeout(() => removeToast(id), duration);
        timers.current.set(id, timer);
      }
      return id;
    },
    [removeToast],
  );

  // 언마운트 시 모든 타이머 정리
  useEffect(() => {
    const map = timers.current;
    return () => {
      map.forEach((timer) => clearTimeout(timer));
      map.clear();
    };
  }, []);

  const value = useMemo(
    () => ({ showToast, removeToast }),
    [showToast, removeToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {IS_BROWSER &&
        toasts.length > 0 &&
        createPortal(
          <S.ToastViewport role="region" aria-label="알림">
            {toasts.map((toast) => (
              <S.ToastItem
                key={toast.id}
                $type={toast.type}
                $closing={toast.closing}
                role="alert"
              >
                <span className="icon" aria-hidden="true">
                  {ICON_SYMBOL[toast.type]}
                </span>
                <span className="message">{toast.message}</span>
                <button
                  type="button"
                  className="close"
                  aria-label="알림 닫기"
                  onClick={() => removeToast(toast.id)}
                >
                  <IconX />
                </button>
              </S.ToastItem>
            ))}
          </S.ToastViewport>,
          document.body,
        )}
    </ToastContext.Provider>
  );
};

// 하위 컴포넌트에서 토스트를 띄우는 훅
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast는 ToastProvider 하위에서만 사용할 수 있습니다.");
  }
  return context;
};

export default ToastProvider;
