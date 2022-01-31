import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <BrandBlock>MFE-APP</BrandBlock>
      </Link>
      <NavWrapper>
        <List>
          <ListItem>
            <Link to={"/rest"}>REST</Link>
          </ListItem>
          <ListItem>
            <Link to={"/gql"}>GQL</Link>
          </ListItem>
        </List>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: grid;
  grid-area: header;
  grid-template-columns: 2fr 7fr;
  align-items: center;
  padding: 10px 30px;
  background-color: var(--sub-color);
  font-family: var(--title-ff);
  font-size: var(--title-size);
  color: var(--title-color);
`;
const BrandBlock = styled.div`
  justify-self: center;
`;
const NavWrapper = styled.div`
  justify-self: center;
  width: 400px;
  padding: 0 50px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const ListItem = styled.li`
  font-family: var(--text-ff);
  font-size: var(--text-size);
  color: var(--text-color);
`;
