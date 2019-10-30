import React, { ReactNode } from "react"
import styled from "styled-components"

const Steps = styled.div`
  ${tw`relative flex flex-col pl-8 md:pl-0`}
`

const SStep = styled.div<{ index: number }>`
  ${tw`relative w-full sm:w-4/5 md:w-1/2 pb-8`}

  :last-child {
    ${tw`pb-0`}
  }

  ::before {
    ${tw`absolute bg-black`}

    content: "";

    top: 0;

    height: 100%;
    width: 2px;
  }

  ::after {
    ${tw`absolute w-12 h-12 text-white font-medium bg-black border-2 border-white rounded-full`}
    ${tw`flex justify-center items-center`}

    content: "${props => props.index + 1}";
    top: 0;
  }

  :nth-child(2n + 1) {
    ${tw`self-center md:self-start text-left md:text-right pl-8 md:pr-8`}

    ::before {
      right: -1px;

      @media (max-width: ${props => props.theme.screens["md"]}) {
        left: -1px;
      }
    }

    ::after {
      right: 0;
      transform: translateX(50%);

      @media (max-width: ${props => props.theme.screens["md"]}) {
        left: 0;
        transform: translateX(-50%)
          translateY(-${props => props.theme.spacing["3"]});
      }
    }
  }

  :nth-child(2n) {
    ${tw`self-center md:self-end text-left pl-8`}

    ::before {
      left: -1px;

      @media (max-width: ${props => props.theme.screens["md"]}) {
        right: -1px;
      }
    }

    ::after {
      left: 0;
      transform: translateX(-50%)
        translateY(-${props => props.theme.spacing["3"]});
    }
  }

  :last-child {
    ::before {
      ${tw`w-0`}
    }
  }
`

export const Step = ({
  title,
  content,
  ...rest
}: {
  title: ReactNode
  content: ReactNode
}) => (
  <SStep index={(rest as any).index}>
    {title}
    {content}
  </SStep>
)

export default ({ children }: { children: ReactNode }) => (
  <Steps>
    {(children as any).map((child: any, index: number) => ({
      ...child,
      props: {
        ...child.props,
        index,
      },
    }))}
  </Steps>
)
