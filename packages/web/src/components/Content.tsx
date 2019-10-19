import styled, { css } from "styled-components"

export default styled.section<{ collapse?: boolean }>`
  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;

  ${props =>
    props.collapse &&
    css`
      border-top-width: 0;
      border-bottom-width: 0;
    `}
`
