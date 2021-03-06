import React from 'react'
import styled from 'styled-components'

import useWindowSize from 'hooks/useWindowSize'

import ThemeToggle from 'components/base/ThemeToggle'
import InstallButton from 'components/base/InstallButton'
import ShareWrapper from 'components/wrappers/ShareWrapper'
import EmbedWrapper from 'components/wrappers/EmbedWrapper'
import ContactWrapper from 'components/wrappers/ContactWrapper'
import FooterWrapper from 'components/wrappers/FooterWrapper'
import ButtonsMore from 'components/misc/ButtonsMore'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 46rem;
  min-height: ${(props) => props.windowHeight}px;
  margin: 0 auto 5rem;
  padding: 2rem 0.5rem;

  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`
export default function Web(props) {
  const { height } = useWindowSize()

  return (
    <Wrapper>
      <ThemeToggle />
      <Content>
        <FullScreen windowHeight={height}>
          {props.children}
          <ButtonsMore />
        </FullScreen>
        <FooterWrapper />
      </Content>
      <EmbedWrapper />
      <ShareWrapper />
      <ContactWrapper />
      <InstallButton />
    </Wrapper>
  )
}
