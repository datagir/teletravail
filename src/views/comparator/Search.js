import React from 'react'
import styled from 'styled-components'

import Timing from './search/Timing'
import Distance from './search/Distance'
import Transportation from './search/Transportation'
import Time from './search/Time'

const Wrapper = styled.p`
  align-self: flex-start;
  width: 31.25rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.7;

  ${(props) => props.theme.mq.small} {
    width: 100%;
    margin-bottom: 3rem;
    font-size: 1rem;
  }
`
export default function Search() {
  return (
    <Wrapper>
      <Timing />
      <Distance />
      <Transportation />
      <Time />
    </Wrapper>
  )
}
