import React from "react";
import styled from "styled-components";

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Block>
        <h2>О чем приложение</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          exercitationem?
        </p>
      </Block>
      <Block>
        <h2>First</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          exercitationem?
        </p>
      </Block>
      <Block>
        <h2>Second</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
          exercitationem?
        </p>
      </Block>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  display: grid;
  grid-area: side-bar;
  background-color: var(--main-color);
  padding: 20px 30px;
  color: var(--text-color);
`;

const Block = styled.div`
  &.h2 {
  }
`;
