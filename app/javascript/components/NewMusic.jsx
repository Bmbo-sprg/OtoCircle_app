import React from "react";
import SideNav from "./SideNav";
import { Flex, Heading } from "@chakra-ui/react";
import NewMusicForm from "./NewMusicForm";

const NewMusic = () => {

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <Flex direction="column" w="100%" px={2}>
        <Heading size="md" my={8}>音楽を投稿する</Heading>
        <NewMusicForm />
      </Flex>
    </Flex>
  );
};

export default NewMusic;
