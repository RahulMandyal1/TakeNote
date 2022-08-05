import React from "react";
import styled from "styled-components";
import { AiFillDelete, AiOutlineStar, AiFillPlusSquare } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { flexCol, flexRowCenter } from "../../stylesheets/generalStyle";

function NavigationSidebar() {
  const Container = styled.aside`
    flex: 0 1 15%;
    height: 100% !important;
    background: #2c2c2d;
    padding: 1rem;
  `;
  const MenuContainer = styled.nav``;

  const MenuItem = styled.li`
    list-style: none;
    ${flexRowCenter};
    justify-content: flex-start;
    padding: 1rem 0;
  `;

  const MenuIcon = styled.span`
    margin-right: 1rem;
  `;

  const MenuText = styled.span`
    color: #cbc8cb;
    font-weight: 600;
  `;

  return (
    <Container className="navigation-container">
      <MenuContainer>
        <MenuItem>
          <MenuIcon>
            <AiFillPlusSquare />
          </MenuIcon>
          <MenuText>New Note</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <CgNotes />
          </MenuIcon>
          <MenuText>Notes</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <AiOutlineStar />
          </MenuIcon>
          <MenuText>Favourites</MenuText>
        </MenuItem>
        <MenuItem>
          <MenuIcon>
            <AiFillDelete />
          </MenuIcon>
          <MenuText>Trash</MenuText>
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default NavigationSidebar;
