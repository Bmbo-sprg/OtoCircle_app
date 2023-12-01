import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComposerCard from "./ComposerCard";
import SideNav from "./SideNav";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Composers = () => {
  const navigate = useNavigate();
  const [composers, setComposers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/composers");
        if (res.ok) {
          const data = await res.json();
          setComposers(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (err) {
        console.error(err);
        navigate("/");
      }
    };
    fetchData();
  }, []);

  const allComposers = composers.map((composer, index) => (
    <ComposerCard
      id={composer.id}
      key={index}
      name={composer.name}
    />
  ));
  const noComposer = <Text>No composer yet</Text>;

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <SimpleGrid columns={3} spacing={2}>
        {composers.length > 0 ? allComposers : noComposer}
      </SimpleGrid>
    </Flex>
  );
};

export default Composers;
