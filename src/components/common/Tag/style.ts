import styled from "styled-components";

export const Tag = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
  background: ${({ theme }) => theme.colors.gray100};
  padding: 3px 8px;
  border-radius: 4px;
`;
