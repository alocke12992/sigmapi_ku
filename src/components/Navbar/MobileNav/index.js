import React from 'react';
import { navigate } from 'gatsby';
import './mobileNav.css';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import Menu from './Menu';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Spacer, MenuWrapper, Container } from './styles';
import PreventScroll from 'styledComponents/PreventScroll';

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
  const { menuOpen } = this.state;
  const menuItems = routes.map(({route, name},index)=>{
    return (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={()=>{this.handleLinkClick(route);}}>{name}</MenuItem>)
  });

  return(
    <>
    <MenuWrapper>
      <Container>
        <MenuButton open={menuOpen} onClick={()=>this.handleMenuClick()} color='black'/>
        <div style={styles.logo} onClick={()=>this.handleLinkClick('/')}>
          <Img fluid={logo} />
        </div>
      </Container>
      <Menu open={menuOpen}>
        {menuItems}
      </Menu>
      <Spacer />
    </MenuWrapper>
    <PreventScroll stopScroll={menuOpen} />
    </>
  )
}
}

export default MobileNav;
