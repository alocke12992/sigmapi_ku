import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  padding: 10%;
  border: solid 1px ${props => props.theme.main};
`;

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <>
        <Helmet title={siteTitle} />
        <Container>
          KU Sigma Pi
        </Container>
      </>
    )
  }
}

export default RootIndex
