# Components 구조 가이드

```
components/
├── common/                     # 전역에서 쓰이는 범용 컴포넌트
│   ├── Accordion/              # 접었다 펼치는 아코디언 메뉴
│   ├── Button/                 # 클릭 가능한 다목적 버튼 (a 태그 겸용)
│   ├── Checkbox/               # 체크박스 선택 컴포넌트
│   ├── CustomSelect/           # 커스텀 스타일 드롭다운 선택창
│   ├── Img/                    # 이미지 렌더링 컴포넌트
│   ├── Input/                  # 텍스트 입력 컴포넌트
│   ├── ItemsScrollBar/         # 가로 스냅 스크롤 레이아웃
│   ├── ItemsSwiper/            # 스와이퍼 슬라이드 컴포넌트
│   ├── Modal/                  # 팝업 모달창 컴포넌트
│   ├── Radio/                  # 라디오 버튼 선택 컴포넌트
│   ├── Select/                 # 기본 드롭다운 선택창
│   ├── ShinyText/              # 반짝이는 텍스트 효과
│   ├── SwiperNavigation/       # 스와이퍼 이전/다음 버튼
│   ├── SwiperPagination/       # 스와이퍼 페이지 표시기
│   ├── Tabs/                   # 탭 전환 레이아웃 컴포넌트
│   ├── Text/                   # 다목적 텍스트 컴포넌트
│   ├── TextEditor/             # 해시태그 지원 텍스트 편집기 (방명록 등)
│   ├── Video/                  # 영상 재생 및 제어 컴포넌트
│   └── svg/                    # SVG 아이콘 컴포넌트 모음
│
├── layout/                     # 페이지 공통 레이아웃
│   ├── Header/                 # 상단 내비게이션 헤더
│   ├── Navigation/             # 섹션 이동 메뉴 링크
│   ├── Footer/                 # 하단 정보 및 링크 영역
│   └── index.tsx
│
└── sections/                   # 각 페이지의 굵직한 영역들
    ├── Hero/                   # 메인 첫 화면 소개 영역
    ├── About/                  # 자기소개 및 경력 영역
    ├── Contact/                # 연락처 정보 및 링크 영역
    └── Projects/               # 프로젝트 목록 전시 영역
        ├── components/
        │   ├── texts/          # Projects 전용 텍스트 컴포넌트
        │   │   └── SectionTitle/       # 섹션별 공통 제목
        │   ├── lists/          # 다양한 리스트 레이아웃
        │   │   ├── MainVisualBnrList/  # 메인 비주얼 배너 슬라이드
        │   │   └── CardBannerSwiperType/ # 카드형 배너 스와이퍼 (모바일 creative 효과 / PC 그리드+네비게이션)
        │   ├── menus/          # 네비게이션 메뉴
        │   │   └── QuickMenuBar/       # 퀵 메뉴 바 스와이퍼
        │   ├── buttons/        # Projects 전용 링크/필터 버튼들
        │   │   └── QuickMenuBtn/       # 퀵 메뉴 개별 버튼
        │   ├── cards/          # 프로젝트 개별 카드 (예정)
        │   ├── filters/        # 필터 관련 컴포넌트 (예정)
        │   ├── items/          # 개별 아이템 컴포넌트
        │   │   └── CardTypeBannerItem/ # 이미지/영상을 보여주는 카드·리스트형 배너 아이템 (type="card" | "listBnn")
        │   └── modals/         # Projects 전용 모달 (예정)
        ├── index.tsx
        └── style.ts
```

## 규칙

- 각 컴포넌트는 `index.tsx` + `style.ts` 한 쌍으로 구성
- `common/` — 여러 섹션/페이지에서 재사용 가능한 UI 원자 단위
- `layout/` — 모든 페이지에 고정으로 들어가는 레이아웃 뼈대
- `sections/` — 페이지를 구성하는 대형 영역 단위, 내부 전용 컴포넌트는 `components/` 하위에 목적별로 분류
