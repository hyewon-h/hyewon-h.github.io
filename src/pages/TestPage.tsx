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
import ItemsScrollBar from "@/components/common/ItemsScrollBar";
import ItemsSwiper from "@/components/common/ItemsSwiper";
import { isMobile } from "react-device-detect";

// public 하위 에셋은 빌드 없이 정적 제공되므로 절대 URL 문자열로 참조
// (process.env.PUBLIC_URL: package.json homepage가 있어도 안전하게 base가 붙음)
const ASSETS = `${process.env.PUBLIC_URL}/assets/images`;

const mainBannerData = {
  title: "메인 비주얼 타이틀",
  desc: "메인 비주얼 설명",
  slide: [
    {
      imgSrc: `${ASSETS}/dummy01.jpg`,
      value: "배너1",
    },
    {
      imgSrc: `${ASSETS}/dummy02.jpg`,
      value: "배너2",
    },
    {
      videoSrc: `${ASSETS}/video01.mp4`,
      value: "배너3",
    },
    {
      imgSrc: `${ASSETS}/dummy03.jpg`,
      value: "배너4",
    },
    {
      imgSrc: `${ASSETS}/dummy04.jpg`,
      value: "배너5",
    },
    {
      videoSrc: `${ASSETS}/video02.mp4`,
      value: "배너6",
    },
  ],
};

const TestPage = () => {
  // Button
  // Checkbox
  const [checked, setChecked] = useState(false);
  // Input
  const [inputValue, setInputValue] = useState("");
  // Modal
  const [modalOpen, setModalOpen] = useState(false);
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
        <h2>react-device-detect</h2>
        <Text>isMobile: {String(isMobile)}</Text>
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
        />
      </TestSection>
    </TestPageWrapper>
  );
};

// 스타일드 컴포넌트
const TestPageWrapper = styled.div`
  padding: 40px 16px;
  max-width: 800px;
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
