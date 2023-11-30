import React from "react";
import SideNav from "./SideNav";
import { Flex } from "@chakra-ui/react";

export default () => {
  return (
    <Flex direction="row" overflow="hidden">
      <SideNav />
    </Flex>
  );
};
