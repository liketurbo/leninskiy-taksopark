import styled, { css } from "styled-components"

export default styled.section<{ collapse?: boolean }>`
  ${tw`my-12`}

  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;

  ${props =>
    props.collapse &&
    css`
      ${tw`my-0`}
    `}
`
