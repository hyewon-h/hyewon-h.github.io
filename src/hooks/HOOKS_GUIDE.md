# React Hooks 사용 가이드

포트폴리오 프로젝트에서 사용할 커스텀 훅 모음입니다.

---

## 📋 목차

1. [useToggle](#1-usetoggle) - 불리언 상태 토글
2. [useDebounce](#2-usedebounce) - 입력 디바운싱
3. [useLocalStorage](#3-uselocalstorage) - 로컬스토리지 동기화
4. [useClickOutside](#4-useclickoutside) - 외부 클릭 감지
5. [useIntersectionObserver](#5-useintersectionobserver) - 뷰포트 가시성 감지
6. [useScrollNavi](#7-usescrollnavi) - 스크롤 네비게이션

---

## 1. useToggle

**용도:** 모달, 사이드바, 드롭다운 등의 열림/닫힘 상태 관리

### 기본 사용법

```typescript
const { value, toggle, setTrue, setFalse } = useToggle(false);
```

### 실전 예시

#### 모달 열기/닫기

```typescript
function MyPage() {
  const { value: isModalOpen, setTrue: openModal, setFalse: closeModal } = useToggle();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        모달 내용
      </Modal>
    </>
  );
}
```

#### 사이드바 토글

```typescript
function Layout() {
  const { value: isSidebarOpen, toggle: toggleSidebar } = useToggle(true);

  return (
    <>
      <button onClick={toggleSidebar}>메뉴</button>
      <aside className={isSidebarOpen ? 'open' : 'closed'}>
        사이드바 내용
      </aside>
    </>
  );
}
```

#### 아코디언

```typescript
function Accordion({ title, children }) {
  const { value: isExpanded, toggle } = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{title}</button>
      {isExpanded && <div>{children}</div>}
    </div>
  );
}
```

---

## 2. useDebounce

**용도:** 검색창, 자동저장 등 빈번한 입력에서 API 호출 최적화

### 기본 사용법

```typescript
const debouncedValue = useDebounce(value, 500);
```

### 실전 예시

#### 검색 기능

```typescript
function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearch) {
      // 300ms 후에 한 번만 API 호출
      fetch(`/api/search?q=${debouncedSearch}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="검색..."
    />
  );
}
```

#### 자동 저장

```typescript
function Editor() {
  const [content, setContent] = useState('');
  const debouncedContent = useDebounce(content, 1000);

  useEffect(() => {
    if (debouncedContent) {
      // 1초간 입력이 없으면 자동 저장
      saveToServer(debouncedContent);
      console.log('자동 저장됨!');
    }
  }, [debouncedContent]);

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}
```

#### 실시간 유효성 검사

```typescript
function SignupForm() {
  const [email, setEmail] = useState('');
  const debouncedEmail = useDebounce(email, 500);
  const [isAvailable, setIsAvailable] = useState(null);

  useEffect(() => {
    if (debouncedEmail) {
      // 이메일 중복 체크
      checkEmailAvailability(debouncedEmail)
        .then(available => setIsAvailable(available));
    }
  }, [debouncedEmail]);

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {isAvailable === false && <p>이미 사용중인 이메일입니다</p>}
    </div>
  );
}
```

---

## 3. useLocalStorage

**용도:** 다크모드, 로그인 정보, 장바구니 등 영구 저장이 필요한 데이터

### 기본 사용법

```typescript
const [value, setValue] = useLocalStorage("key", initialValue);
```

### 실전 예시

#### 다크모드

```typescript
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

#### 로그인 토큰 저장

```typescript
function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage('auth-token', '');
  const [user, setUser] = useLocalStorage('user', null);

  const login = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    setToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

#### 장바구니

```typescript
function ShoppingCart() {
  const [cart, setCart] = useLocalStorage('cart', []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>장바구니 ({cart.length})</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - {item.price}원
          <button onClick={() => removeFromCart(item.id)}>삭제</button>
        </div>
      ))}
      <button onClick={clearCart}>전체 삭제</button>
    </div>
  );
}
```

#### 사용자 설정

```typescript
function Settings() {
  const [settings, setSettings] = useLocalStorage('user-settings', {
    language: 'ko',
    notifications: true,
    fontSize: 'medium',
  });

  const updateSetting = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div>
      <select
        value={settings.language}
        onChange={(e) => updateSetting('language', e.target.value)}
      >
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
```

---

## 4. useClickOutside

**용도:** 모달, 드롭다운, 팝업 등 외부 클릭 시 닫기

### 기본 사용법

```typescript
const ref = useRef(null);
useClickOutside(ref, callback);
```

### 실전 예시

#### 드롭다운 메뉴

```typescript
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        메뉴 열기
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li>프로필</li>
          <li>설정</li>
          <li>로그아웃</li>
        </ul>
      )}
    </div>
  );
}
```

#### 모달 (기존 Modal 컴포넌트와 함께)

```typescript
function CustomModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Modal 컴포넌트에 disableBackdropClick이 없는 경우 사용
  useClickOutside(modalContentRef, () => setIsOpen(false));

  return (
    <>
      <button onClick={() => setIsOpen(true)}>열기</button>
      {isOpen && (
        <div className="modal-backdrop">
          <div ref={modalContentRef} className="modal-content">
            내용
          </div>
        </div>
      )}
    </>
  );
}
```

#### 검색 자동완성

```typescript
function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setShowSuggestions(false));

  return (
    <div ref={containerRef}>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
      />

      {showSuggestions && query && (
        <ul className="suggestions">
          <li>추천 검색어 1</li>
          <li>추천 검색어 2</li>
        </ul>
      )}
    </div>
  );
}
```

---

## 5. useIntersectionObserver

**용도:** 무한 스크롤, 이미지 레이지 로딩, 스크롤 애니메이션

### 기본 사용법

```typescript
const ref = useRef(null);
const isVisible = useIntersectionObserver(ref, options);
```

### 옵션

- `threshold`: 0~1 사이 값, 요소가 얼마나 보여야 감지할지 (기본: 0)
- `rootMargin`: 뷰포트 마진 (예: '50px', 기본: '0px')

### 실전 예시

#### 무한 스크롤

```typescript
function InfiniteScroll() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const isVisible = useIntersectionObserver(loaderRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible && !loading) {
      setLoading(true);

      // API 호출 시뮬레이션
      setTimeout(() => {
        const newItems = Array(5).fill(0).map((_, i) => items.length + i + 1);
        setItems([...items, ...newItems]);
        setPage(page + 1);
        setLoading(false);
      }, 1000);
    }
  }, [isVisible]);

  return (
    <div>
      {items.map(item => (
        <div key={item} className="item">
          아이템 {item}
        </div>
      ))}
      <div ref={loaderRef} className="loader">
        {loading ? '로딩 중...' : '더 보기'}
      </div>
    </div>
  );
}
```

#### 이미지 레이지 로딩

```typescript
function LazyImage({ src, alt }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(imgRef, {
    threshold: 0.1,
    rootMargin: '50px', // 화면에 나타나기 50px 전에 미리 로드
  });

  return (
    <div ref={imgRef} className="image-container">
      {isVisible ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="placeholder">이미지 로딩 중...</div>
      )}
    </div>
  );
}

// 사용
function Gallery() {
  return (
    <div>
      {images.map(img => (
        <LazyImage key={img.id} src={img.url} alt={img.title} />
      ))}
    </div>
  );
}
```

#### 스크롤 애니메이션

```typescript
function FadeInSection({ children }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </section>
  );
}

// 사용
function Portfolio() {
  return (
    <>
      <FadeInSection>
        <h2>프로젝트 1</h2>
      </FadeInSection>
      <FadeInSection>
        <h2>프로젝트 2</h2>
      </FadeInSection>
    </>
  );
}
```

---

## 6. useScrollNavi

**용도:** 포트폴리오 사이트의 스크롤 네비게이션 (원페이지 레이아웃)

### 기본 사용법

```typescript
const { activeSection, scrollToSection } = useScrollNavi(
  ["hero", "about", "projects", "contact"],
  { offset: 200, throttle: 100 },
);
```

### 옵션

- `offset`: 섹션 활성화 기준점 (기본: 화면 높이의 30%)
- `throttle`: 스크롤 이벤트 쓰로틀링 (기본: 100ms)

### 실전 예시

#### 기본 네비게이션

```typescript
function Portfolio() {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  const { activeSection, scrollToSection } = useScrollNavi(sections);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={activeSection === section ? 'active' : ''}
          >
            {section.toUpperCase()}
          </button>
        ))}
      </nav>

      <section id="hero">히어로 섹션</section>
      <section id="about">소개 섹션</section>
      <section id="skills">스킬 섹션</section>
      <section id="projects">프로젝트 섹션</section>
      <section id="contact">연락 섹션</section>
    </>
  );
}
```

#### 도트 네비게이션 (사이드)

```typescript
function DotNavigation() {
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
  const { activeSection, scrollToSection } = useScrollNavi(sections);

  const sectionNames = {
    hero: '홈',
    about: '소개',
    skills: '스킬',
    projects: '프로젝트',
    contact: '연락',
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`group relative w-3 h-3 rounded-full transition-all ${
            activeSection === section
              ? 'bg-blue-500 scale-150'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={sectionNames[section]}
        >
          {/* 툴팁 */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
            {sectionNames[section]}
          </span>
        </button>
      ))}
    </nav>
  );
}
```

#### 프로그레스 바와 함께

```typescript
function PortfolioWithProgress() {
  const sections = ['hero', 'about', 'projects', 'contact'];
  const { activeSection, scrollToSection } = useScrollNavi(sections);

  const progress = (sections.indexOf(activeSection) / (sections.length - 1)) * 100;

  return (
    <>
      {/* 프로그레스 바 */}
      <div className="fixed top-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 네비게이션 */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 flex gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={activeSection === section ? 'active' : ''}
          >
            {section}
          </button>
        ))}
      </nav>

      <section id="hero">...</section>
      <section id="about">...</section>
      <section id="projects">...</section>
      <section id="contact">...</section>
    </>
  );
}
```

---

## 🎯 포트폴리오 구현 추천 조합

### 1. 기본 원페이지 포트폴리오

```typescript
function MyPortfolio() {
  // 다크모드
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // 스크롤 네비게이션
  const { activeSection, scrollToSection } = useScrollNavi([
    'hero', 'about', 'projects', 'contact'
  ]);

  // 반응형
  const isMobile = useMediaQuery('(max-width: 768px)');

  // 모바일 메뉴
  const { value: isMenuOpen, setFalse: closeMenu, toggle: toggleMenu } = useToggle();

  return (
    <div className={theme}>
      {/* 네비게이션 */}
      <nav>
        {isMobile ? (
          <>
            <button onClick={toggleMenu}>☰</button>
            {isMenuOpen && <MobileMenu />}
          </>
        ) : (
          <DesktopMenu activeSection={activeSection} scrollTo={scrollToSection} />
        )}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* 섹션들 */}
      <section id="hero">...</section>
      <section id="about">...</section>
      <section id="projects">...</section>
      <section id="contact">...</section>
    </div>
  );
}
```

### 2. 프로젝트 갤러리 (무한 스크롤)

```typescript
function ProjectGallery() {
  const [projects, setProjects] = useState([]);
  const loaderRef = useRef(null);
  const isVisible = useIntersectionObserver(loaderRef);

  useEffect(() => {
    if (isVisible) {
      loadMoreProjects();
    }
  }, [isVisible]);

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
      <div ref={loaderRef}>로딩 중...</div>
    </div>
  );
}
```

### 3. 검색 가능한 블로그

```typescript
function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (debouncedSearch) {
      fetch(`/api/posts?q=${debouncedSearch}`)
        .then(res => res.json())
        .then(data => setPosts(data));
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="검색..."
      />
      {posts.map(post => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  );
}
```

---

## 🚀 성능 최적화 팁

1. **useDebounce**: API 호출이 많은 검색, 필터링에 필수
2. **useIntersectionObserver**: 이미지가 많은 갤러리는 레이지 로딩 필수
3. **useMediaQuery**: 불필요한 컴포넌트 렌더링 방지
4. **useLocalStorage**: 서버 요청 줄이기 (테마, 설정 등)
5. **useToggle**: 불필요한 상태 업데이트 방지 (useCallback 사용)

---

## 📱 브라우저 호환성

모든 훅은 모던 브라우저(Chrome, Firefox, Safari, Edge)에서 작동합니다.

- **useIntersectionObserver**: IE 미지원 (polyfill 필요)
- **useLocalStorage**: 사생활 보호 모드에서 제한될 수 있음
- **useMediaQuery**: 모든 브라우저 지원

---

## 🔧 디버깅 팁

### useDebounce가 작동 안 할 때

```typescript
// delay 값 확인
console.log("delay:", delay);

// 디바운스 전/후 값 비교
console.log("원본:", value, "디바운스:", debouncedValue);
```

### useIntersectionObserver가 감지 안 될 때

```typescript
// ref가 제대로 연결됐는지 확인
console.log("ref:", ref.current);

// threshold 값 조정 (0 ~ 1)
useIntersectionObserver(ref, { threshold: 0 }); // 조금이라도 보이면 감지
```

### useLocalStorage 데이터 확인

```typescript
// 개발자 도구 > Application > Local Storage 확인
// 또는 콘솔에서
console.log(localStorage.getItem("your-key"));
```

---

## 📚 추가 학습 자료

- [React Hooks 공식 문서](https://react.dev/reference/react)
- [MDN - Intersection Observer API](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
- [MDN - Window.matchMedia()](https://developer.mozilla.org/ko/docs/Web/API/Window/matchMedia)
- [MDN - Window.localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)

---

**마지막 업데이트:** 2024
**버전:** 1.0.0
