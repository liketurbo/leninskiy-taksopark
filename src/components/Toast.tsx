import React, { ReactNode } from "react"
import styled, { css, keyframes } from "styled-components"

import colors from "@-taxi-parks-ui/theme-colors"
import spacing from "@-taxi-parks-ui/theme-spacing"

type ToastProps = { variant?: Variant; show: boolean }

const fadeIn = keyframes`
  from {top: 0; opacity: 0;}
  to {top: ${spacing[4]}; opacity: 1;}
`

const fadeOut = keyframes`
  from {top: ${spacing[4]}; opacity: 1;}
  to {top: 0; opacity: 0;}
`

const SToast = styled.div<ToastProps>`
  ${tw`fixed text-grey-lightest text-lg font-medium rounded py-2 px-4 z-20`}

  top: ${spacing[4]};
  left: 50%;
  transform: translateX(-50%);

  visibility: hidden;

  ${props =>
    props.show &&
    css`
      visibility: visible;
      animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 2.5s;
    `}

  background: ${({ variant }) => {
    switch (variant) {
      case "success":
        return colors.green
      case "danger":
        return colors.red
      default:
        return colors.white
    }
  }};
`

const Toast = ({ ...rest }: { children: ReactNode } & ToastProps) => (
  <SToast {...rest} />
)

export type Variant = "success" | "danger"

export default Toast
