import React from "react";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  Stack,
  Container,
  Icon,
  Link,
} from "@chakra-ui/react";

import { GitHubIcon, SiteLogoImage } from "./icon";

export type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <Box as="nav" borderBottomWidth={"1px"}>
      <Container maxWidth={"1400px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Icon as={SiteLogoImage} h={10} w={10} />
          </Link>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Link href="https://github.com/mochi-sann/my-ical-class-timetable-generater">
                <Icon as={GitHubIcon} h={10} w={10} />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
