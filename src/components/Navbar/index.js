import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavbarElements.js'

const Navbar = () => {
  return (
    <>
      <PrimaryNav >
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            SideScroller
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Contact
          </MenuLink>
          <MenuLink to="/leaderboard" activeStyle>
            LeaderBoard
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar