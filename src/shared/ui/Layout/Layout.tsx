import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <SideBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    "header header"
    "side-bar content"
    "footer footer";
  grid-template-columns: 25% 75%;
  grid-template-rows: 80px calc(100% - 160px) 80px;
`;

const ContentWrapper = styled.section`
  grid-area: content;
`;
