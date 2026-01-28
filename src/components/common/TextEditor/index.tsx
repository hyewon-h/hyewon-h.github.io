/**
 * 해시태그 하이라이트 및 커서 제어가 가능한 텍스트 에디터 컴포넌트
 * - 해시태그(#) 자동 하이라이트
 * - 최대 글자수(공백 제외) 제한
 * - 외부에서 커서 위치에 텍스트 삽입 지원
 */
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import * as S from "./style";

export interface TextEditorCursorRef {
  insertTextAtCursor: (text: string) => void;
  ref: HTMLTextAreaElement | null;
}

export interface TextEditorProps {
  initialValue?: string;
  placeholder?: string;
  maxLength?: number;
  textEditorCursorRef?: React.MutableRefObject<TextEditorCursorRef | null>;
  maxHashtagLength?: number;
  onChange?: (value: string) => void;
  onCursorChange?: (cursor: number) => void;
}

const TextEditor: React.FC<TextEditorProps> = forwardRef(
  (
    {
      initialValue = "",
      placeholder = "",
      maxHashtagLength = 80,
      textEditorCursorRef,
      onChange,
      maxLength = 300,
      // onCursorChange,
    },
    // ref,
  ) => {
    // 커서 위치 추적 ref (selectionStart, selectionEnd)
    const cursorPositionRef = useRef({
      start: 0,
      end: 0,
    });
    // 입력값 상태
    const [text, setText] = useState(initialValue);
    // textarea DOM 참조
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    // 해시태그 하이라이트 레이어 참조
    const highlightLayerRef = useRef<HTMLDivElement>(null);

    // 공백/줄바꿈 제외 글자수 계산 함수
    const countNonSpaceChars = useCallback(
      (str: string) => str.replace(/[\s\n]/g, "").length,
      [],
    );

    // 입력값에서 해시태그(#)를 찾아 span으로 감싸 하이라이트 HTML 반환
    const highlightHashtags = useCallback(
      (input: string) => {
        const regex = /(^|\s)(#[^\s#]+(?:[^\s]+)*)/g;
        let lastIndex = 0;
        let result = "";

        input.replace(regex, (match, space, hashtag, index) => {
          result += input.slice(lastIndex, index);
          result += space;
          if (countNonSpaceChars(hashtag as string) - 1 <= maxHashtagLength) {
            result += `<span class="hashtag">${hashtag}</span>`;
          } else {
            result += hashtag;
          }
          lastIndex = index + match.length;
          return match;
        });

        result += input.slice(lastIndex);
        return result.replace(/\n/g, "<br>");
      },
      [maxHashtagLength, countNonSpaceChars],
    );

    // textarea 값 변경 핸들러 (글자수 제한, 커서 위치 추적)
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const originalText = e.target.value;
        const originalCursorPosition = e.target.selectionStart;
        const originalCursorEndPosition = e.target.selectionEnd;
        if (countNonSpaceChars(originalText) > maxLength) {
          window.alert(`${maxLength}자 이내로 작성해 주세요.`);
          e.preventDefault();
          textareaRef.current?.blur();
          return;
        }
        cursorPositionRef.current = {
          start: originalCursorPosition,
          end: originalCursorEndPosition,
        };
        setText(originalText);
        onChange?.(originalText);
      },
      [maxLength, countNonSpaceChars, onChange],
    );

    // 입력 제한 및 연속 공백 방지 핸들러
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const currentValue = textareaRef.current?.value || "";
        const currentLength = countNonSpaceChars(currentValue);
        const cursorPosition = textareaRef.current?.selectionStart || 0;
        if (
          e.code === "Space" &&
          currentValue.charAt(cursorPosition - 1) === " "
        ) {
          e.preventDefault();
          return;
        }
        if (
          currentLength === 0 &&
          (e.code === "Space" || e.code === "" || e.code === "Enter")
        ) {
          e.preventDefault();
          return;
        }
        if (
          currentLength > maxLength &&
          ![
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End",
          ].includes(e.key) &&
          !e.ctrlKey &&
          !e.metaKey
        ) {
          e.preventDefault();
        }
      },
      [countNonSpaceChars, maxLength],
    );

    // 한글 등 조합 입력 시작/종료 핸들러
    const handleCompositionStart = useCallback(() => {}, []);
    const handleCompositionEnd = useCallback(() => {}, []);

    // textarea 스크롤 시 하이라이트 레이어 동기화
    const handleScroll = useCallback(() => {
      if (textareaRef.current && highlightLayerRef.current) {
        highlightLayerRef.current.style.top = `-${textareaRef.current.scrollTop}px`;
      }
    }, []);

    // 초기값 변경 시 동기화
    useEffect(() => {
      setText(initialValue);
    }, [initialValue]);

    // textarea 렌더링 메모이제이션
    const memoizedTextarea = useMemo(
      () => (
        <textarea
          ref={textareaRef}
          className="editor-textarea"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onScroll={handleScroll}
          placeholder={placeholder}
          spellCheck="false"
        />
      ),
      [
        text,
        handleChange,
        handleKeyDown,
        handleCompositionStart,
        handleCompositionEnd,
        handleScroll,
        placeholder,
      ],
    );

    // 외부에서 커서 위치에 텍스트 삽입
    const insertTextAtCursor = useCallback(
      (textToInsert: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        const start = cursorPositionRef.current.start ?? text.length;
        const end = cursorPositionRef.current.end ?? text.length;
        const beforeCursor = text.slice(0, start);
        const afterCursor = text.slice(end);
        const newText = beforeCursor + textToInsert + afterCursor;
        setText(newText);
        onChange?.(newText);
        cursorPositionRef.current = {
          start: end + textToInsert.length,
          end: end + textToInsert.length,
        };
        const newCursorPosition = end + textToInsert.length;
        setTimeout(() => {
          textarea.setSelectionRange(newCursorPosition, newCursorPosition);
        }, 0);
      },
      [text, onChange, cursorPositionRef],
    );

    // imperativeHandle로 외부 ref에 메서드 노출
    useImperativeHandle(textEditorCursorRef, () => ({
      insertTextAtCursor,
      ref: textareaRef.current,
    }));

    // 글자수 카운트 렌더
    const renderCount = useCallback(
      () => (
        <span className="count">
          {countNonSpaceChars(text)} / {maxLength}
        </span>
      ),
      [text, maxLength, countNonSpaceChars],
    );

    return (
      <S.TextEditor className="text-editor">
        <div className="editor-container">
          <div
            ref={highlightLayerRef}
            className="highlight-layer"
            dangerouslySetInnerHTML={{ __html: highlightHashtags(text) }}
          />
          {memoizedTextarea}
        </div>
        {renderCount()}
      </S.TextEditor>
    );
  },
);

TextEditor.displayName = "TextEditor";
export default React.memo(TextEditor);
