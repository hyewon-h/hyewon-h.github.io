import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: inline-block;
`;

export const StyledSelect = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #888;
  }
`;
