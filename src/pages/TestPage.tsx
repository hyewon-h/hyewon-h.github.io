import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Checkbox from "../components/common/Checkbox";
import Img from "../components/common/Img";
import Input from "../components/common/Input";
import Modal from "../components/common/Modal";
import Radio from "../components/common/Radio";
import Text from "../components/common/Text";
import Select from "../components/common/Select";
import Tabs from "../components/common/Tabs";
import Accordion from "../components/common/Accordion";

const TestPage: React.FC = () => {
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
  // Tabs
  const tabs = [
    { label: "Tab 1", content: <div>Tab 1 Content</div> },
    { label: "Tab 2", content: <div>Tab 2 Content</div> },
    { label: "Tab 3", content: <div>Tab 3 Content</div> },
  ];
  // Accordion
  const panels = [
    { title: "Panel 1", content: <div>Accordion Panel 1</div> },
    { title: "Panel 2", content: <div>Accordion Panel 2</div> },
  ];

  return (
    <TestPageWrapper>
      <h1>공통 컴포넌트 테스트</h1>
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
    </TestPageWrapper>
  );
};

// 스타일드 컴포넌트
const TestPageWrapper = styled.div`
  padding: 40px 16px;
  max-width: 800px;
  margin: 0 auto;
  background: #fafbfc;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  h1 {
    font-size: 2rem;
    margin-bottom: 32px;
    text-align: center;
  }
`;

const TestSection = styled.section`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  padding: 24px 20px 16px 20px;
  margin-bottom: 28px;
  h2 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    color: #222;
  }
`;

export default TestPage;
