import styled, { css } from "styled-components"

export default styled.p<{ indent?: boolean }>`
  ${tw`mb-2`}

  ${props =>
    props.indent &&
    css`
      text-indent: ${props => props.theme.spacing["2"]};

      &::before {
        content: "• ";
      }
    `}
`
