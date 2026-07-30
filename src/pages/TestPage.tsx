import { useState } from "react";
import styled from "styled-components";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import Img from "@/components/common/Img";
import Video from "@/components/common/Video";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import Radio from "@/components/common/Radio";
import Text from "@/components/common/Text";
import Select from "@/components/common/Select";
import Tabs from "@/components/common/Tabs";
import Accordion from "@/components/common/Accordion";
import TextEditor from "@/components/common/TextEditor";
import CustomSelect from "@/components/common/CustomSelect";
import MainVisualBnrList from "@/components/sections/Projects/components/lists/MainVisualBnrList";
import CardBannerSwiperType from "@/components/sections/Projects/components/lists/CardBannerSwiperType";
import CardTypeBannerItem from "@/components/sections/Projects/components/items/CardTypeBannerItem";
import ShowcaseBannerList from "@/components/sections/Projects/components/lists/ShowcaseBannerList";
import ShowcaseBannerItem from "@/components/sections/Projects/components/items/ShowcaseBannerItem";
import ItemsScrollBar from "@/components/common/ItemsScrollBar";
import ItemsSwiper from "@/components/common/ItemsSwiper";
import FilterModal from "@/components/sections/Projects/components/modals/FilterModal";
import CategoryMenuBar from "@/components/sections/Projects/components/menus/CategoryMenuBar";
import QuickMenuBar from "@/components/sections/Projects/components/menus/QuickMenuBar";
import QuickMenuBtn from "@/components/sections/Projects/components/buttons/QuickMenuBtn";
import GnbSearch from "@/components/common/GnbSearch";
import Tag from "@/components/common/Tag";
import Chip from "@/components/common/Chip";
import { isDesktop } from "react-device-detect";

// public 하위 에셋은 빌드 없이 정적 제공되므로 절대 URL 문자열로 참조
// (process.env.PUBLIC_URL: package.json homepage가 있어도 안전하게 base가 붙음)
const ASSETS = `${process.env.PUBLIC_URL}/assets/images`;

const mainBannerData = {
  title: "메인 비주얼 타이틀",
  desc: "메인 비주얼 설명",
  slide: [
    {
      imgSrc: `${ASSETS}/shiru01.jpeg`,
      value: "배너1",
    },
    {
      imgSrc: `${ASSETS}/shiru02.jpeg`,
      value: "배너2",
    },
    {
      videoSrc: `${ASSETS}/video01.mp4`,
      value: "배너3",
    },
    {
      imgSrc: `${ASSETS}/shiru03.jpeg`,
      value: "배너4",
    },
    {
      imgSrc: `${ASSETS}/shiru04.jpeg`,
      value: "배너5",
    },
    {
      videoSrc: `${ASSETS}/video02.mp4`,
      value: "배너6",
    },
  ],
};

// ShowcaseBanner
const showcaseBannerData = [
  {
    title: "위켄드 무드의 데일리 룩북",
    bannerImgSrc: [
      `${ASSETS}/shiru05.jpeg`,
      `${ASSETS}/shiru06.jpeg`,
      `${ASSETS}/shiru07.jpeg`,
    ],
    products: [`${ASSETS}/hodu01.jpeg`, `${ASSETS}/hodu02.jpeg`],
  },
  {
    title: "가을의 시작, 레이어드 스타일링 제안",
    bannerImgSrc: [`${ASSETS}/shiru08.jpeg`, `${ASSETS}/shiru09.jpeg`],
    products: [
      `${ASSETS}/hodu03.jpeg`,
      `${ASSETS}/hodu04.jpeg`,
      `${ASSETS}/hodu05.jpeg`,
    ],
  },
  {
    title: "미니멀 무드 컬렉션",
    bannerImgSrc: [`${ASSETS}/shiru10.jpeg`],
    products: [`${ASSETS}/hodu06.jpeg`, `${ASSETS}/hodu07.jpeg`],
  },
];

// QuickMenu
const quickMenuRow1 = [
  { text: "전체", imgSrc: `${ASSETS}/hodu01.jpeg` },
  { text: "신상품", imgSrc: `${ASSETS}/hodu02.jpeg` },
  { text: "베스트", imgSrc: `${ASSETS}/hodu03.jpeg` },
  { text: "위클리 특가", imgSrc: `${ASSETS}/hodu04.jpeg`, isAd: true },
  { text: "브랜드관", imgSrc: `${ASSETS}/hodu05.jpeg` },
  { text: "아울렛", imgSrc: `${ASSETS}/hodu06.jpeg` },
];

const quickMenuRow2 = [
  { text: "쿠폰" },
  { text: "기획전" },
  { text: "이벤트", isAd: true },
  { text: "럭키드로우" },
  { text: "선물하기" },
  { text: "매거진" },
  { text: "고객센터" },
];

// 쇼케이스 배너 데모용 상품 아이템 (실제 상품 컴포넌트 대체)
const renderShowcaseProducts = (images: string[]) =>
  images.map((img, index) => (
    <div className="item product-item" key={img}>
      <Img className="area-img" src={img} alt={`상품 ${index + 1}`} />
      <div className="area-info">
        <div className="area-click">
          <Text block className="brand">
            브랜드 {index + 1}
          </Text>
          <Text block className="detail">
            상품명 {index + 1}
          </Text>
        </div>
      </div>
    </div>
  ));

const TestPage = () => {
  // Button
  // Checkbox
  const [checked, setChecked] = useState(false);
  // Input
  const [inputValue, setInputValue] = useState("");
  const [clearInputValue, setClearInputValue] = useState("");
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  // FilterModal
  const [filterOpen, setFilterOpen] = useState(false);
  // Chip
  const [chips, setChips] = useState(["원피스", "니트", "코트", "가방"]);
  // MenuBarSwiper
  const menuItems = [
    "전체",
    "아우터",
    "니트",
    "티셔츠",
    "원피스",
    "팬츠",
    "스커트",
    "가방",
    "슈즈",
    "액세서리",
    "주얼리",
    "언더웨어",
    "라이프",
    "뷰티",
  ].map((label) => ({ value: label, label }));
  const [menuValue, setMenuValue] = useState<string | number>("전체");
  const [menuAlign, setMenuAlign] = useState<"center" | "left">("center");
  // Drawer Modal (type / placement)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPlacement, setDrawerPlacement] = useState<
    "bottom" | "left" | "right"
  >("bottom");
  // Radio
  const [radioValue, setRadioValue] = useState("option1");
  // Select
  const [selectValue, setSelectValue] = useState("1");
  // ItemsScrollBar selectedIndex
  const [scrollIndex, setScrollIndex] = useState(0);
  // Tabs
  const tabs = [
    { label: "Tab 1", content: <div>Tab 1 Content</div> },
    { label: "Tab 2", content: <div>Tab 2 Content</div> },
    { label: "Tab 3", content: <div>Tab 3 Content</div> },
  ];

  // CustomSelect
  const [customSelectValue, setCustomSelectValue] = useState("");
  const customSelectOptions = [
    { value: "", label: "", optionvalue: "" },
    {
      value: "1",
      label: "색상/사이즈 선택1",
      optionvalue: "색상/사이즈 선택1",
    },
    {
      value: "2",
      label: "색상/사이즈 선택2",
      optionvalue: "색상/사이즈 선택2",
      deliveryDate: "내일 도착",
      surcharge: "+2,000원",
      restockBtn: true,
      restockUrl: "https://example.com/restock",
    },
    {
      value: "3",
      label: "품절 옵션",
      optionvalue: "품절 옵션",
      disabled: true,
    },
  ];
  // Accordion
  const panels = [
    { title: "Panel 1", content: <div>Accordion Panel 1</div> },
    { title: "Panel 2", content: <div>Accordion Panel 2</div> },
  ];

  return (
    <TestPageWrapper>
      <h1>공통 컴포넌트 테스트</h1>
      {/* <TestSection>
        <h2>ShinyText</h2>
        <ShinyText
          text="✨ ShinyText 효과 테스트!"
          speed={2}
          color="#b5b5b5"
          shineColor="#fff700"
          spread={120}
        />
      </TestSection> */}
      <TestSection>
        <h2>Button</h2>
        <Button onClick={() => alert("Button Clicked!")}>버튼</Button>
      </TestSection>
      <TestSection>
        <h2>Checkbox</h2>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label="체크박스"
        />
      </TestSection>
      <TestSection>
        <h2>Input</h2>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="입력하세요"
        />
        <Input
          value={clearInputValue}
          onChange={(e) => setClearInputValue(e.target.value)}
          placeholder="clearable 입력하세요"
          clearable
          onClear={() => setClearInputValue("")}
        />
      </TestSection>
      <TestSection>
        <h2>Radio</h2>
        <Radio
          name="testRadio"
          value="option1"
          checked={radioValue === "option1"}
          onChange={() => setRadioValue("option1")}
          label="옵션 1"
        />
        <Radio
          name="testRadio"
          value="option2"
          checked={radioValue === "option2"}
          onChange={() => setRadioValue("option2")}
          label="옵션 2"
        />
      </TestSection>
      <TestSection>
        <h2>Select</h2>
        <Select
          options={[
            { label: "선택 1", value: "1" },
            { label: "선택 2", value: "2" },
          ]}
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        />
      </TestSection>
      <TestSection>
        <h2>CustomSelect</h2>
        <CustomSelect
          options={customSelectOptions}
          value={customSelectValue}
          onChange={setCustomSelectValue}
          placeholder="옵션 선택"
        />
      </TestSection>
      <TestSection>
        <h2>Tabs</h2>
        <Tabs tabs={tabs} />
      </TestSection>
      <TestSection>
        <h2>Accordion</h2>
        <Accordion panels={panels} />
      </TestSection>
      <TestSection>
        <h2>Modal</h2>
        <Button onClick={() => setModalOpen(true)}>모달 열기</Button>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <div style={{ padding: 24 }}>모달 내용입니다.</div>
        </Modal>
      </TestSection>
      <TestSection>
        <h2>FilterModal</h2>
        <Button onClick={() => setFilterOpen(true)}>필터 모달 열기</Button>
        <FilterModal
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          onApply={(selected) => console.log("적용된 필터:", selected)}
          size={isDesktop ? "medium" : "fullscreen"}
        />
      </TestSection>
      <TestSection>
        <h2>MenuBarSwiper (가로 메뉴 + 펼침 버튼)</h2>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <Button onClick={() => setMenuAlign("center")}>
            center{menuAlign === "center" ? " ●" : ""}
          </Button>
          <Button onClick={() => setMenuAlign("left")}>
            left{menuAlign === "left" ? " ●" : ""}
          </Button>
        </div>
        <CategoryMenuBar
          items={menuItems}
          selectedValue={menuValue}
          onChange={setMenuValue}
          align={menuAlign}
        />
        <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          정렬: {menuAlign} · 선택: {menuValue} · 우측 화살표로 전체 펼치기
          (컨테이너보다 넓을 때만 노출)
        </p>
      </TestSection>
      <TestSection>
        <h2>QuickMenuBtn</h2>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <QuickMenuBtn text="텍스트만" onClick={() => alert("텍스트만")} />
          <QuickMenuBtn
            text="이미지 + 텍스트"
            imgSrc={`${ASSETS}/hodu01.jpeg`}
            onClick={() => alert("이미지 + 텍스트")}
          />
          <QuickMenuBtn
            text="광고 태그"
            imgSrc={`${ASSETS}/hodu02.jpeg`}
            isAd
            onClick={() => alert("광고 태그")}
          />
          <QuickMenuBtn
            text="컬러 지정"
            bgColor="#1a1a1a"
            fontColor="#fff"
            onClick={() => alert("컬러 지정")}
          />
        </div>
        <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          bgColor/fontColor 미지정 시 #f6f6f6 / #000 · imgSrc 유무에 따라 좌측
          패딩이 달라집니다
        </p>
      </TestSection>
      <TestSection>
        <h2>QuickMenuBar (2줄 연동 스크롤)</h2>
        <QuickMenuBar
          items1={quickMenuRow1.map((menu) => (
            <QuickMenuBtn
              key={menu.text}
              text={menu.text}
              {...(menu.imgSrc !== undefined && { imgSrc: menu.imgSrc })}
              {...(menu.isAd !== undefined && { isAd: menu.isAd })}
              onClick={() => alert(`${menu.text} 클릭`)}
            />
          ))}
          items2={quickMenuRow2.map((menu) => (
            <QuickMenuBtn
              key={menu.text}
              text={menu.text}
              {...(menu.isAd !== undefined && { isAd: menu.isAd })}
              onClick={() => alert(`${menu.text} 클릭`)}
            />
          ))}
        />
        <p style={{ marginTop: 12, fontSize: 14, color: "#666" }}>
          두 줄이 Controller로 연동되어 함께 스크롤됩니다 · 줄 간 길이 차이가
          100px 이상이면 저항값이 0.02로 낮아집니다
        </p>
      </TestSection>
      <TestSection>
        <h2>Tag</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>styled-components</Tag>
        </div>
      </TestSection>
      <TestSection>
        <h2>Chip</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {chips.map((chip) => (
            <Chip
              key={chip}
              onClick={() => alert(`${chip} 클릭`)}
              onRemove={() =>
                setChips((prev) => prev.filter((c) => c !== chip))
              }
            >
              {chip}
            </Chip>
          ))}
          {chips.length === 0 && (
            <Button
              onClick={() => setChips(["원피스", "니트", "코트", "가방"])}
            >
              칩 초기화
            </Button>
          )}
        </div>
      </TestSection>
      <TestSection>
        <h2>GnbSearch (PC GNB 검색창)</h2>
        <div style={{ minHeight: 420 }}>
          <GnbSearch onSearch={(word) => console.log("검색:", word)} />
        </div>
      </TestSection>
      <TestSection>
        <h2>Modal - Drawer (type / placement)</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["bottom", "left", "right"] as const).map((p) => (
            <Button
              key={p}
              onClick={() => {
                setDrawerPlacement(p);
                setDrawerOpen(true);
              }}
            >
              {p} 드로어
            </Button>
          ))}
        </div>
        <Modal
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          type="drawer"
          placement={drawerPlacement}
          title={`${drawerPlacement} drawer`}
        >
          <div style={{ padding: 24, minHeight: 160 }}>
            {drawerPlacement} 방향 드로어 내용입니다.
          </div>
        </Modal>
      </TestSection>
      <TestSection>
        <h2>Text</h2>
        <Text size="lg" weight="bold">
          큰 텍스트
        </Text>
        <Text size="md">중간 텍스트</Text>
        <Text size="sm" color="#888">
          작은 텍스트
        </Text>
      </TestSection>
      <TestSection>
        <h2>Img</h2>
        <Img
          src="https://via.placeholder.com/100"
          alt="샘플 이미지"
          width={100}
          height={100}
        />
      </TestSection>
      <TestSection>
        <h2>TextEditor</h2>
        <TextEditor placeholder="해시태그 입력 테스트" />
      </TestSection>

      <TestSection>
        <h2>ItemsScrollBar</h2>
        <div style={{ width: "100%", overflow: "hidden" }}>
          {/* 예시: 5개의 아이템을 가로 스크롤로 보여줌 */}
          <ItemsScrollBar perView={3} gap={12} offsetLR={16} snap scrollInit>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="item">
                <DemoItem>Item {i + 1}</DemoItem>
              </div>
            ))}
          </ItemsScrollBar>
        </div>
      </TestSection>

      <TestSection>
        <h2>ItemsScrollBar - perView 0 (item-auto / 너비 자동)</h2>
        <div style={{ width: "100%", overflow: "hidden" }}>
          {/* perView={0}: 아이템 너비를 컨텐츠 크기로 자동 지정 */}
          <ItemsScrollBar perView={0} gap={8} offsetLR={16} snap>
            {[
              "짧음",
              "조금 더 긴 텍스트",
              "AUTO",
              "내용 크기로 너비 자동 조절",
              "끝",
            ].map((text, i) => (
              <div key={i} className="item">
                <DemoItem style={{ padding: "0 20px", whiteSpace: "nowrap" }}>
                  {text}
                </DemoItem>
              </div>
            ))}
          </ItemsScrollBar>
        </div>
      </TestSection>

      <TestSection>
        <h2>ItemsScrollBar - line 2 (2줄 가로 스크롤 그리드)</h2>
        <div style={{ width: "100%", overflow: "hidden" }}>
          {/* line={2}: 아이템을 2줄로 나눠 가로 스크롤 */}
          <ItemsScrollBar
            perView={3}
            line={2}
            gap={12}
            rowGap={12}
            offsetLR={16}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="item">
                <DemoItem>Item {i + 1}</DemoItem>
              </div>
            ))}
          </ItemsScrollBar>
        </div>
      </TestSection>

      <TestSection>
        <h2>ItemsScrollBar - selectedIndex / scrollAlign(center)</h2>
        {/* 아이템 안의 버튼을 클릭하면 해당 아이템이 가운데로 스크롤 */}
        <div style={{ width: "100%", overflow: "hidden" }}>
          <ItemsScrollBar
            perView={3}
            gap={12}
            offsetLR={16}
            snap
            selectedIndex={scrollIndex}
            scrollAlign="center"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="item">
                <DemoItem
                  style={{
                    background: scrollIndex === i ? "#4f7cff" : "#e0e7ef",
                    color: scrollIndex === i ? "#fff" : "#2a3a4a",
                  }}
                >
                  <Button onClick={() => setScrollIndex(i)}>
                    Item {i + 1}로 이동
                  </Button>
                </DemoItem>
              </div>
            ))}
          </ItemsScrollBar>
        </div>
      </TestSection>

      <TestSection>
        <h2>ItemsSwiper</h2>
        <div style={{ width: "100%", maxWidth: 400 }}>
          {/* 예시: 3개의 슬라이드 */}
          <ItemsSwiper
            slidesPerView={1}
            pagination
            loop
            autoplay={{ delay: 2000 }}
          >
            {[
              <div
                key="slide1"
                style={{
                  height: 120,
                  background: "#f8d7da",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                Slide 1
              </div>,
              <div
                key="slide2"
                style={{
                  height: 120,
                  background: "#d1e7dd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                Slide 2
              </div>,
              <div
                key="slide3"
                style={{
                  height: 120,
                  background: "#cff4fc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: 20,
                }}
              >
                Slide 3
              </div>,
            ]}
          </ItemsSwiper>
        </div>
      </TestSection>

      <TestSection>
        <h2>Main banner</h2>
        <div>
          <MainVisualBnrList
            items={mainBannerData.slide.map((item, index) => (
              <div key={index}>
                {item.imgSrc && (
                  <Img src={item.imgSrc} alt={`배너 이미지 ${index + 1}`} />
                )}
                {item.videoSrc && (
                  <Video src={item.videoSrc} responsive muted playsinline />
                )}
              </div>
            ))}
            title={mainBannerData.title}
            desc={mainBannerData.desc}
          />
        </div>
      </TestSection>

      <TestSection>
        <h2>CardBannerSwiperType</h2>
        <CardBannerSwiperType
          items={mainBannerData.slide.map((item, index) => (
            <CardTypeBannerItem
              key={index}
              type="card"
              {...(item.imgSrc !== undefined && { imgSrc: item.imgSrc })}
              {...(item.videoSrc !== undefined && { videoSrc: item.videoSrc })}
              title1={`카드 타이틀 ${index + 1}`}
              subTitle={`서브 타이틀 ${index + 1}`}
              onClick={() => alert(`카드 ${index + 1} 클릭`)}
            />
          ))}
          isDesktop={isDesktop}
        />
      </TestSection>

      <TestSection>
        <h2>ShowcaseBannerList</h2>
        <ShowcaseBannerDemo>
          <ShowcaseBannerList
            isDesktop={isDesktop}
            items={showcaseBannerData.map((banner) => (
              <ShowcaseBannerItem
                key={banner.title}
                isDesktop={isDesktop}
                title={banner.title}
                bannerImgSrc={banner.bannerImgSrc}
                productItems={renderShowcaseProducts(banner.products)}
                onClickBanner={() => alert(`${banner.title} 클릭`)}
              />
            ))}
          />
        </ShowcaseBannerDemo>
      </TestSection>
    </TestPageWrapper>
  );
};

// 스타일드 컴포넌트
const TestPageWrapper = styled.div`
  padding: 40px 16px;
  max-width: 1326px;
  margin: 0 auto;
  background: #fafbfc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  h1 {
    font-size: 2rem;
    margin-bottom: 32px;
    text-align: center;
  }
`;

const TestSection = styled.section`
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  padding: 24px 20px 16px 20px;
  margin-bottom: 28px;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    color: #222;
  }
`;

// 쇼케이스 배너 데모용 상품 아이템 스타일 (실제 상품 컴포넌트 대체)
const ShowcaseBannerDemo = styled.div`
  .product-item {
    display: flex;
    align-items: center;
    color: #fff;

    .area-img {
      flex: none;
      width: 100%;
      aspect-ratio: 3 / 4;
      object-fit: cover;
    }

    .area-info {
      min-width: 0;
    }

    .brand {
      font-size: 12px;
      font-weight: 600;
    }

    .detail {
      font-size: 12px;
    }
  }
`;

const DemoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  background: #e0e7ef;
  color: #2a3a4a;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
`;

export default TestPage;
