import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #fff;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
`

const CreateLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Para = styled.p`
  font-size: 18px;
  text-align: center;
`

const WelcomePage = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>TripWeather</Title>
        <Para>Catch the weather before it catches you.</Para>
      </ContentContainer>
      <ContentContainer>
        <CreateLink to="/create">
          <Button big>Get Started</Button>
        </CreateLink>
      </ContentContainer>
    </Container>
  )
}

export default WelcomePage