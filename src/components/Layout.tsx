import React from "react";
import { Container } from "@chakra-ui/react";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <Container maxWidth={"900px"}>{props.children}</Container>
    </div>
  );
};

export default Layout;
