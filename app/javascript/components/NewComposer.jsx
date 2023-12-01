import React from "react";
import SideNav from "./SideNav";
import { Flex, Heading } from "@chakra-ui/react";
import NewComposerForm from "./NewComposerForm";

const NewComposer = () => {

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <Flex direction="column" w="100%" px={2}>
        <Heading size="md" my={8}>作曲者名義を作成する</Heading>
        <NewComposerForm />
      </Flex>
    </Flex>
  );
};

export default NewComposer;
