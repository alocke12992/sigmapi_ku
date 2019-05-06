import React from 'react';
import { navigate } from 'gatsby';
import './mobileNav.css';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import Menu from './Menu';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media, colors } from 'styledComponents/theme'

const Spacer = styled.div`
  height: 15px;
`;

const MenuWrapper = styled.div`
  ${media.tablet`
    display: none;
  `}
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  zIndex: 99;
  opacity: 0.9;
  display: flex;
  alignItems:center;
  background: ${colors.white};
  width: 100%;
  color: black;
`

class MobileNav extends React.Component {
  state={ menuOpen:false }

handleMenuClick() {
  this.setState({menuOpen:!this.state.menuOpen});
}

handleLinkClick(route) {
  this.setState({menuOpen: false});
  navigate(route)
}

render(){
  const styles =
    {
      container:{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '99',
        opacity: 0.9,
        display:'flex',
        alignItems:'center',
        background: 'white',
        width: '100%',
        color: 'black',
        fontFamily:'Lobster',
      },
      logo: {
        margin: '0 auto',
        width: '90%',
        maxWidth: '150px',
        height: 'auto',
        padding: '10px 0',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)':null,
        transition: 'filter 0.5s ease',
      },
    }
  const { routes, logo } = this.props;
  const menuItems = routes.map(({route, name},index)=>{
    return (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={()=>{this.handleLinkClick(route);}}>{name}</MenuItem>)
  });

  return(
    <MenuWrapper>
      <Container>
        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='black'/>
        <div style={styles.logo}>
          <Img fluid={logo} />
        </div>
      </Container>
      <Menu open={this.state.menuOpen}>
        {menuItems}
      </Menu>
      <Spacer />
    </MenuWrapper>
  )
}
}

export default MobileNav;
