import React, { memo, useCallback, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { classNameBind } from "@/utils/commonUtils";
import * as S from "./style";

export interface PopularWord {
  /** 순위 */
  rank: number;
  /** 검색어 */
  word: string;
  /** NEW 여부 */
  isNew?: boolean;
}

const DEFAULT_RECENT = ["원피스", "니트", "코트", "숄더백"];

const DEFAULT_POPULAR: PopularWord[] = [
  { rank: 1, word: "겨울코트", isNew: true },
  { rank: 2, word: "패딩" },
  { rank: 3, word: "니트원피스" },
  { rank: 4, word: "첼시부츠", isNew: true },
  { rank: 5, word: "머플러" },
  { rank: 6, word: "가디건" },
  { rank: 7, word: "롱코트" },
  { rank: 8, word: "플리스" },
  { rank: 9, word: "워커" },
  { rank: 10, word: "스카프" },
];

const MAX_RECENT = 10;

interface IProps {
  /** 입력창 placeholder */
  placeholder?: string;
  /** 최근 검색어 초기값 */
  initialRecent?: string[];
  /** 인기 검색어 리스트 */
  popular?: PopularWord[];
  /** 검색 실행 콜백 */
  onSearch?: (word: string) => void;
  /** className */
  className?: string;
}

const GnbSearch = ({
  placeholder = "검색어를 입력해 주세요",
  initialRecent = DEFAULT_RECENT,
  popular = DEFAULT_POPULAR,
  onSearch,
  className,
}: IProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState<string[]>(initialRecent);

  const close = useCallback(() => setOpen(false), []);
  useClickOutside(wrapRef, close);

  // 최근 검색어에 추가 (중복 제거 후 맨 앞, 최대 MAX_RECENT개)
  const addRecent = useCallback((word: string) => {
    setRecent((prev) =>
      [word, ...prev.filter((w) => w !== word)].slice(0, MAX_RECENT),
    );
  }, []);

  // 검색 실행 (키워드 클릭 / 엔터)
  const search = useCallback(
    (word: string) => {
      const trimmed = word.trim();
      if (!trimmed) return;
      addRecent(trimmed);
      setKeyword(trimmed);
      onSearch?.(trimmed);
      setOpen(false);
    },
    [addRecent, onSearch],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") search(keyword);
    },
    [keyword, search],
  );

  const removeRecent = useCallback((word: string) => {
    setRecent((prev) => prev.filter((w) => w !== word));
  }, []);

  const clearRecent = useCallback(() => setRecent([]), []);

  return (
    <S.GnbSearch
      ref={wrapRef}
      className={classNameBind(["gnb-search", className || ""])}
    >
      <S.SearchField>
        <span className="icon" aria-hidden>
          🔍
        </span>
        <input
          type="text"
          value={keyword}
          placeholder={placeholder}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          aria-label="검색어 입력"
        />
        {keyword && (
          <button
            type="button"
            className="clear"
            aria-label="입력 지우기"
            onClick={() => setKeyword("")}
          >
            ✕
          </button>
        )}
      </S.SearchField>

      {open && (
        <S.Dropdown>
          {/* 최근 검색어 */}
          <div className="recent">
            <div className="head">
              <h3>최근 검색어</h3>
              {recent.length > 0 && (
                <button
                  type="button"
                  className="clear-all"
                  onClick={clearRecent}
                >
                  전체삭제
                </button>
              )}
            </div>
            {recent.length > 0 ? (
              <S.RecentList>
                {recent.map((word) => (
                  <li key={word}>
                    <button
                      type="button"
                      className="word"
                      onClick={() => search(word)}
                    >
                      {word}
                    </button>
                    <button
                      type="button"
                      className="del"
                      aria-label={`${word} 삭제`}
                      onClick={() => removeRecent(word)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </S.RecentList>
            ) : (
              <p className="is-empty">최근 검색어가 없습니다.</p>
            )}
          </div>

          {/* 인기 검색어 */}
          <div className="popular">
            <h3>인기 검색어</h3>
            <S.PopularList>
              {popular.map((item) => (
                <li key={item.word}>
                  <button type="button" onClick={() => search(item.word)}>
                    <span className="rank">{item.rank}</span>
                    <span className="word">{item.word}</span>
                    {item.isNew && <span className="new">N</span>}
                  </button>
                </li>
              ))}
            </S.PopularList>
          </div>

          {/* 하단 닫기 */}
          <div className="bottom">
            <button type="button" onClick={close}>
              닫기
            </button>
          </div>
        </S.Dropdown>
      )}
    </S.GnbSearch>
  );
};

export default memo(GnbSearch);
