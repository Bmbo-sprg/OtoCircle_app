import React from "react";
import SideNav from "./SideNav";
import { Flex, Heading } from "@chakra-ui/react";
import NewCircleForm from "./NewCircleForm";

const NewCircle = () => {

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <Flex direction="column" w="100%" px={2}>
        <Heading size="md" my={8}>サークルを作成する</Heading>
        <NewCircleForm />
      </Flex>
    </Flex>
  );
};

export default NewCircle;
