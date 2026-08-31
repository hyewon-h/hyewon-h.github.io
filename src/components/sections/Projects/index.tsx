import { memo, useState } from "react";
import { isDesktop } from "react-device-detect";
import { projects } from "@/data/projects";
import { workProjects } from "@/data/workProjects";
import {
  WorkProjectCategory,
  ProjectShowcaseProduct,
  ProjectCustomSelectOption,
} from "@/data/types";
import SectionTitle from "@/components/sections/Projects/components/texts/SectionTitle";
import Modal from "@/components/common/Modal";
import Video from "@/components/common/Video";
import Img from "@/components/common/Img";
import CustomSelect from "@/components/common/CustomSelect";
import ItemsScrollBar from "@/components/common/ItemsScrollBar";
import MainVisualBnrList from "@/components/sections/Projects/components/lists/MainVisualBnrList";
import CardBannerSwiperType from "@/components/sections/Projects/components/lists/CardBannerSwiperType";
import ShowcaseBannerList from "@/components/sections/Projects/components/lists/ShowcaseBannerList";
import ProjectHistoryList from "@/components/sections/Projects/components/lists/ProjectHistoryList";
import CardTypeBannerItem from "@/components/sections/Projects/components/items/CardTypeBannerItem";
import ShowcaseBannerItem from "@/components/sections/Projects/components/items/ShowcaseBannerItem";
import ShowcaseProductItem from "@/components/sections/Projects/components/items/ShowcaseProductItem";
import ProductItem from "@/components/sections/Projects/components/items/ProductItem";
import ProjectCard from "@/components/sections/Projects/components/cards/ProjectCard";
import FilterModal from "@/components/sections/Projects/components/modals/FilterModal";
import QuickMenuBar from "@/components/sections/Projects/components/menus/QuickMenuBar";
import QuickMenuBtn from "@/components/sections/Projects/components/buttons/QuickMenuBtn";
import Rating from "@/components/sections/Projects/components/controls/Rating";
import QuantityStepper from "@/components/sections/Projects/components/controls/QuantityStepper";
import * as S from "./style";

const WORK_CATEGORIES: WorkProjectCategory[] = [
  "대규모 프로젝트",
  "주요 기능 개선",
  "마케팅 & 광고",
];

type ProjectTab = "portfolio" | "work";

// productShowcase 데모: 찜 토글 상태 + 별점/수량 스텝퍼 인터랙션
const ProductShowcaseDemo = ({
  items,
}: {
  items: ProjectShowcaseProduct[];
}) => {
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});
  const [rating, setRating] = useState(3.5);
  const [quantity, setQuantity] = useState(1);

  return (
    <S.ProductShowcaseWrap>
      <S.ProductShowcaseGrid>
        {items.map((item, index) => (
          <ProductItem
            key={item.name}
            imgSrc={item.imgSrc}
            name={item.name}
            price={item.price}
            {...(item.brand !== undefined && { brand: item.brand })}
            {...(item.originPrice !== undefined && {
              originPrice: item.originPrice,
            })}
            {...(item.isNew !== undefined && { isNew: item.isNew })}
            {...(item.isAd !== undefined && { isAd: item.isAd })}
            {...(item.soldOut !== undefined && { soldOut: item.soldOut })}
            liked={!!likedMap[index]}
            onToggleLike={() =>
              setLikedMap((prev) => ({ ...prev, [index]: !prev[index] }))
            }
          />
        ))}
      </S.ProductShowcaseGrid>
      <S.ProductShowcaseFooter>
        <Rating value={rating} onChange={setRating} allowHalf size={24} />
        <QuantityStepper
          value={quantity}
          min={1}
          max={10}
          onChange={setQuantity}
        />
      </S.ProductShowcaseFooter>
    </S.ProductShowcaseWrap>
  );
};

// itemsScrollBar 데모: 아이템 수(perView)/줄 수(line) 조절
const ItemsScrollBarDemo = ({ items }: { items: string[] }) => {
  const [perView, setPerView] = useState(3);
  const [line, setLine] = useState(2);

  return (
    <S.ArchiveScrollWrap>
      <S.ArchiveControls>
        <S.ArchiveControlItem>
          <span>아이템 수</span>
          <QuantityStepper
            value={perView}
            min={1}
            max={6}
            onChange={setPerView}
          />
        </S.ArchiveControlItem>
        <S.ArchiveControlItem>
          <span>줄 수</span>
          <QuantityStepper value={line} min={1} max={3} onChange={setLine} />
        </S.ArchiveControlItem>
      </S.ArchiveControls>

      <ItemsScrollBar
        perView={perView}
        line={line}
        gap={12}
        rowGap={12}
        offsetLR={16}
      >
        {items.map((label) => (
          <div className="item" key={label}>
            <S.ArchiveGridItem>{label}</S.ArchiveGridItem>
          </div>
        ))}
      </ItemsScrollBar>
    </S.ArchiveScrollWrap>
  );
};

// customSelect 데모: 선택값 상태 관리
const CustomSelectDemo = ({
  options,
}: {
  options: ProjectCustomSelectOption[];
}) => {
  const [value, setValue] = useState("");

  return (
    <S.CustomSelectDemoWrap>
      <CustomSelect
        options={options}
        value={value}
        onChange={setValue}
        placeholder="옵션을 선택하세요"
      />
    </S.CustomSelectDemoWrap>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectTab>("work");
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const openProject = projects.find((p) => p.id === openProjectId);
  const closeProject = () => setOpenProjectId(null);

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsInner>
        <SectionTitle label="Projects" title="프로젝트" />

        <S.TabBar>
          <S.TabButton
            $isActive={activeTab === "work"}
            onClick={() => setActiveTab("work")}
            data-label="Project Overview"
          >
            Project Overview
          </S.TabButton>
          <S.TabButton
            $isActive={activeTab === "portfolio"}
            onClick={() => setActiveTab("portfolio")}
            data-label="Component Archive"
          >
            Component Archive
          </S.TabButton>
        </S.TabBar>

        {activeTab === "portfolio" && (
          <S.PortfolioGrid>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => project.detail && setOpenProjectId(project.id)}
              />
            ))}
          </S.PortfolioGrid>
        )}

        {activeTab === "work" && (
          <ProjectHistoryList
            items={workProjects}
            categories={WORK_CATEGORIES}
          />
        )}
      </S.ProjectsInner>

      {openProject?.detail?.type === "filterModal" && (
        <FilterModal
          isOpen
          onClose={closeProject}
          size={isDesktop ? "medium" : "fullscreen"}
        />
      )}

      {openProject?.detail && openProject.detail.type !== "filterModal" && (
        <Modal
          isOpen
          onClose={closeProject}
          title={openProject.title}
          size={isDesktop ? "large" : "fullscreen"}
          contentMinHeight={400}
        >
          {openProject.detail.type === "mainVisual" && (
            <MainVisualBnrList
              {...(openProject.detail.title !== undefined && {
                title: openProject.detail.title,
              })}
              {...(openProject.detail.desc !== undefined && {
                desc: openProject.detail.desc,
              })}
              isDesktop={isDesktop}
              items={openProject.detail.slides.map((slide, index) => (
                <div key={index}>
                  {slide.imgSrc && (
                    <Img
                      src={slide.imgSrc}
                      alt={
                        slide.value || `${openProject.title} 배너 ${index + 1}`
                      }
                    />
                  )}
                  {slide.videoSrc && (
                    <Video src={slide.videoSrc} responsive muted playsinline />
                  )}
                </div>
              ))}
            />
          )}

          {openProject.detail.type === "cardBanner" && (
            <CardBannerSwiperType
              isDesktop={isDesktop}
              items={openProject.detail.items.map((item, index) => (
                <CardTypeBannerItem
                  key={index}
                  type="card"
                  {...(item.imgSrc !== undefined && { imgSrc: item.imgSrc })}
                  {...(item.videoSrc !== undefined && {
                    videoSrc: item.videoSrc,
                  })}
                  {...(item.title1 !== undefined && { title1: item.title1 })}
                  {...(item.subTitle !== undefined && {
                    subTitle: item.subTitle,
                  })}
                />
              ))}
            />
          )}

          {openProject.detail.type === "showcaseBanner" && (
            <ShowcaseBannerList
              isDesktop={isDesktop}
              items={openProject.detail.banners.map((banner) => (
                <ShowcaseBannerItem
                  key={banner.title}
                  isDesktop={isDesktop}
                  title={banner.title}
                  bannerImgSrc={banner.bannerImgSrc}
                  productItems={banner.products.map((img, index) => (
                    <ShowcaseProductItem
                      key={img}
                      imgSrc={img}
                      brand={`브랜드 ${index + 1}`}
                      name={`상품명 ${index + 1}`}
                    />
                  ))}
                />
              ))}
            />
          )}

          {openProject.detail.type === "quickMenu" && (
            <QuickMenuBar
              items1={openProject.detail.row1.map((menu) => (
                <QuickMenuBtn
                  key={menu.text}
                  text={menu.text}
                  {...(menu.imgSrc !== undefined && { imgSrc: menu.imgSrc })}
                  {...(menu.isAd !== undefined && { isAd: menu.isAd })}
                  onClick={() => {}}
                />
              ))}
              items2={openProject.detail.row2.map((menu) => (
                <QuickMenuBtn
                  key={menu.text}
                  text={menu.text}
                  {...(menu.imgSrc !== undefined && { imgSrc: menu.imgSrc })}
                  onClick={() => {}}
                />
              ))}
            />
          )}

          {openProject.detail.type === "productShowcase" && (
            <ProductShowcaseDemo items={openProject.detail.items} />
          )}

          {openProject.detail.type === "itemsScrollBar" && (
            <ItemsScrollBarDemo items={openProject.detail.items} />
          )}

          {openProject.detail.type === "customSelect" && (
            <CustomSelectDemo options={openProject.detail.options} />
          )}
        </Modal>
      )}
    </S.ProjectsSection>
  );
};

export default memo(Projects);
