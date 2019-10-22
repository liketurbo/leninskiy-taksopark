import React, { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

const Button = styled.button`
  ${tw`bg-yellow hover:bg-yellow-dark text-lg text-grey-darkest font-medium rounded py-2 px-4`}

  transition: background-color 0.15s ease;
`

export default ({ ...rest }: ButtonHTMLAttributes<any>) => <Button {...rest} />
