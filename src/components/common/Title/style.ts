import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-bottom: 56px;
`;

export const Label = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const TitleText = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;
