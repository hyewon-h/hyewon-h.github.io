# 컴포넌트 스타일 가이드

새 컴포넌트를 만들 때 따라야 할 스타일 규칙을 정리한 문서입니다. `src/components` 하위에 이미 있는 컴포넌트들(`QuickMenuBtn`, `ProductItem`, `Toast` 등)에서 실제로 쓰이고 있는 패턴을 기준으로 합니다.

## 1. 디렉터리 구조

- 여러 섹션에서 재사용되는 범용 UI는 `src/components/common/{ComponentName}/`
- 특정 섹션 전용 컴포넌트는 `src/components/sections/{Section}/components/{역할별 폴더}/{ComponentName}/`
  - 역할별 폴더 예시(Projects 섹션 기준): `buttons`, `cards`, `controls`, `filters`, `items`, `lists`, `menus`, `modals`, `texts`
  - 새 역할이 필요하면 기존 폴더 이름과 같은 규칙(복수형 명사)으로 새로 만든다
- 각 컴포넌트 폴더는 `index.tsx`(로직) + `style.ts`(스타일)로 분리

```
src/components/sections/Projects/components/controls/QuantityStepper/
  index.tsx
  style.ts
```

## 2. 반응형 브레이크포인트 규칙

`src/styles/theme.ts`의 `media` 토큰만 사용한다. 임의로 `min-width`/`max-width`를 직접 쓰지 않는다.

| 토큰 | 의미 | 용도 |
| --- | --- | --- |
| `theme.media.smMax` | `max-width: 374px` (아주 작은 모바일) | 기준 px 값을 vw로 유동 변환 |
| `theme.media.pc` | `min-width: 1080px` | 데스크톱 전용 값 |

스타일은 항상 **모바일 퍼스트**로 작성한다. 기본값은 디자인 기준 해상도인 375px 모바일 화면의 px 값이고, 그보다 작은 화면(smMax, 374px 이하)은 vw로 유동 축소, 그보다 큰 화면(pc, 1080px 이상)은 필요할 때만 별도 값을 지정한다. 순서: **① 기본(375px 모바일 기준 px) → ② smMax(374px 이하, vw 변환) → ③ pc(1080px 이상, 별도 px)** (`QuickMenuBtn/style.ts` 참고):

```ts
export const Example = styled.div`
  /* 1) 기본값: 375px 모바일 기준 px */
  height: 42px;
  padding: 4px 12px;

  /* 2) smMax(374px 이하): mixin.pxToVw로 유동 처리 */
  @media ${({ theme }) => theme.media.smMax} {
    height: ${mixin.pxToVw("42")};
    padding: ${mixin.pxToVw("4 12")};
  }

  /* 3) pc(1080px 이상): 필요한 경우에만 별도 값 지정 (없으면 생략) */
  @media ${({ theme }) => theme.media.pc} {
    height: 48px;
    padding: 8px 14px;
  }
`;
```

규칙:

- **rem 단위는 쓰지 않는다.** 모든 크기 값은 px로 쓰고, 모바일 유동 대응은 `mixin.pxToVw(size, standard = 375)`로 처리한다.
- `mixin.pxToVw`는 공백으로 구분된 여러 값(`padding`처럼 4방향 값 등)을 한 번에 변환할 수 있다: `mixin.pxToVw("4 12 4 7")`.
- `pc` 미디어 블록은 **디자인상 실제로 크기가 달라질 때만** 추가한다. 모바일/PC 차이가 없는 컴포넌트라면 기본 px 값이 PC에서도 그대로 적용되므로 `pc` 블록을 억지로 만들 필요는 없다.
- `width`/`height`/`padding`/`gap`/`border-radius` 같은 레이아웃 크기 값은 이 규칙을 따르되, **폰트 크기는 아래 3번 가이드를 우선한다** (PC에서 폰트를 키우지 않음).
- 값이 `props`(예: `$size`, `$width`)로 전달되는 컴포넌트(`Rating`, `Img` 등)는 사용하는 쪽에서 크기를 결정하므로 `smMax`/`pc` 미디어 규칙 대상이 아니다.

## 3. 폰트 사이즈 가이드

기준: `sections/About` 커리어 리스트 (`CareerPeriod` 12px / `CareerDesc` 13px / `CareerTitle`·`CareerRole` 14px / `CareerCompany` 16px).

- **최대 16px을 넘기지 않는다.** 강조 텍스트(타이틀, 라벨)도 16px이 상한이다.
- 톤 단계는 아래 기준을 따른다.

| 용도 | font-size |
| --- | --- |
| 캡션/보조 텍스트(뱃지, 카운트, 타임스탬프 등) | 11~12px |
| 본문 텍스트 | 13px |
| 라벨/버튼/인터랙티브 요소 텍스트 | 14px |
| 강조/제목 텍스트 | 15~16px |

- **PC에서 폰트 크기를 키우지 않는다.** `width`/`padding` 등 다른 크기 값은 PC에서 더 커질 수 있지만, `font-size`는 breakpoint와 무관하게 항상 같은 값을 유지한다.

```ts
export const Label = styled.span`
  font-size: 14px;

  @media ${({ theme }) => theme.media.smMax} {
    font-size: ${mixin.pxToVw("14")};
  }

  /* pc 블록에 font-size를 넣더라도 base와 동일한 값을 쓴다 */
  @media ${({ theme }) => theme.media.pc} {
    font-size: 14px;
  }
`;
```

- 같은 셀렉터 안에서 `smMax`용 `mixin.pxToVw(...)` 인자는 반드시 해당 요소의 **base font-size 값과 동일한 숫자**를 넣는다. base 값을 수정하면 `pxToVw` 인자도 함께 수정한다.

## 4. 체크리스트 (새 컴포넌트 만들 때)

1. 올바른 디렉터리(`common` vs `sections/.../components/역할별폴더`)에 위치시켰는가?
2. 크기 값에 `rem`이 아닌 `px` + `mixin.pxToVw`를 사용했는가?
3. `theme.media.smMax` / `theme.media.pc` 외의 커스텀 미디어쿼리를 쓰지 않았는가?
4. `font-size`가 16px을 넘지 않고, `pc`에서 별도로 커지지 않는가?
5. `smMax`의 `pxToVw` 인자가 base 값과 일치하는가?
