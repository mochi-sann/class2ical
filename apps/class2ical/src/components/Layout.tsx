import React from "react";

import { Container } from "@chakra-ui/react";

import { NavBar } from "./NavBar";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Container maxWidth={"1400px"}>{props.children}</Container>
    </div>
  );
};

export default Layout;
