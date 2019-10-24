import styled, { css } from "styled-components"

export const CSSContent = css`
  ${tw`my-12`}

  padding: 0 calc(50% - ${props => props.theme.spacing["112"]});
  border: ${props => props.theme.spacing["4"]} solid transparent;
  border-top-width: 0;
  border-bottom-width: 0;
`

export default styled.section`
  ${CSSContent}
`
