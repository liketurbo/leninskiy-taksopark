import React, { ReactNode } from "react"
import styled, { css, keyframes } from "styled-components"

export type Variant = "success" | "danger"
type ToastProps = { variant?: Variant; show: boolean }

const fadeIn = keyframes`
  from {top: 0; opacity: 0;}
  to {top: ${props => props.theme.spacing[4]}; opacity: 1;}
`

const fadeOut = keyframes`
  from {top: ${props => props.theme.spacing[4]}; opacity: 1;}
  to {top: 0; opacity: 0;}
`

const Toast = styled.div<ToastProps>`
  ${tw`fixed text-grey-lightest text-lg font-medium rounded py-2 px-4 z-20`}

  top: ${props => props.theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);

  visibility: hidden;

  ${props =>
    props.show &&
    css`
      visibility: visible;
      animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
    `}

  background: ${({ variant, theme }) => {
    switch (variant) {
      case "success":
        return theme.colors.green
      case "danger":
        return theme.colors.red
      default:
        return theme.colors.white
    }
  }};
`

export default ({ ...rest }: { children: ReactNode } & ToastProps) => (
  <Toast {...rest} />
)
