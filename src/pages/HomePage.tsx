import React, { useState } from "react";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div>
      <Text block size={32} weight={700}>
        테스트
      </Text>

      <div>
        <Button onClick={() => setIsModalOpen(true)}>기본 모달 열기</Button>
        <Button onClick={() => setIsContactModalOpen(true)}>
          연락처 모달 열기
        </Button>
      </div>

      {/* 기본 테스트 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="테스트 모달"
        size="medium"
      >
        <Text>이것은 테스트 모달입니다.</Text>
        <Text block>
          Modal 컴포넌트가 정상적으로 작동하는지 확인하기 위한 내용입니다.
        </Text>
        <div>
          <Button onClick={() => setIsModalOpen(false)}>닫기</Button>
          <Button onClick={() => alert("확인됨!")}>확인</Button>
        </div>
      </Modal>

      {/* 연락처 폼 모달 */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="연락하기"
        size="medium"
      >
        <div>
          <div>
            <Text block weight={500}>
              이름
            </Text>
            <Input placeholder="이름을 입력하세요" />
          </div>
          <div>
            <Text block weight={500}>
              이메일
            </Text>
            <Input type="email" placeholder="이메일을 입력하세요" />
          </div>
          <div>
            <Text block weight={500}>
              메시지
            </Text>
            <textarea placeholder="메시지를 입력하세요" />
          </div>
          <div>
            <Button onClick={() => setIsContactModalOpen(false)}>취소</Button>
            <Button
              onClick={() => {
                alert("메시지가 전송되었습니다!");
                setIsContactModalOpen(false);
              }}
            >
              전송
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
