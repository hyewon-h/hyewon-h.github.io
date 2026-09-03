import styled from "styled-components";
import { mixin } from "@/styles/index";

export const DraggableScroller = styled.div`
  &.grabbing {
    cursor: grabbing;
  }
`;

export const List = styled.div`
  ${mixin.flex({ justify: "flex-start" })};
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.dragging {
    pointer-events: none;
    scroll-snap-type: none;
    scroll-behavior: auto;
  }
`;
