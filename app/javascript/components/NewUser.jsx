import React from "react";
import SideNav from "./SideNav";
import { Flex, Heading } from "@chakra-ui/react";
import NewUserForm from "./NewUserForm";

const NewUser = () => {

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <Flex direction="column" w="100%" px={2}>
        <Heading size="md" my={8}>アカウントを作成する</Heading>
        <NewUserForm />
      </Flex>
    </Flex>
  );
};

export default NewUser;
