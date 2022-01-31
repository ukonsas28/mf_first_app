import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Description>IPR-ShirokovAM</Description>
      <ExternalLink href="https://github.com/ukonsas28" target={"_blank"}>
        GITHUB
      </ExternalLink>
      <Year>2022</Year>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: grid;
  grid-area: footer;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(1fr, 3);
  background-color: var(--sub-color);
  padding: 0 30px;
  color: var(--title-color);
`;

const Description = styled.span`
  grid-column: 1/2;
  align-self: center;
`;

const ExternalLink = styled.a`
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
`;

const Year = styled.span`
  grid-column: 3/4;
  align-self: center;
  justify-self: end;
`;
