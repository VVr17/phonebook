import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  /* margin-top: ${p => p.theme.space[3]}px; */
  /* margin-bottom: ${p => p.theme.space[3]}px; */
`;

export const Title = styled.h2`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.18;
  letter-spacing: 0.05em;
  color: ${p => p.theme.colors.accentTextColor};
  text-align: center;

  ${p => p.theme.mediaQueries.medium} {
    font-size: ${p => p.theme.fontSizes.m};
  }

  ${p => p.theme.mediaQueries.large} {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;
