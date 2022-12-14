import styled from '@emotion/styled';

export const UserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${p => p.theme.mediaQueries.smallOnly} {
    margin-top: ${p => p.theme.space[3]}px;
  }

  ${p => p.theme.mediaQueries.medium} {
    align-items: center;
    flex-direction: row;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${p => p.theme.colors.secondaryTextColor};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: 600;

    ${p => p.theme.mediaQueries.smallOnly} {
      margin-bottom: ${p => p.theme.space[3]}px;
    }

    ${p => p.theme.mediaQueries.medium} {
      margin-right: ${p => p.theme.space[4]}px;
    }

    svg {
      margin-right: ${p => p.theme.space[2]}px;
    }
  }
`;
