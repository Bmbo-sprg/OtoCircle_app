import React from "react";
import Routes from "../routes";
import { ChakraProvider } from "@chakra-ui/react";

export default _ => (
  <ChakraProvider>
    {Routes}
  </ChakraProvider>
);
