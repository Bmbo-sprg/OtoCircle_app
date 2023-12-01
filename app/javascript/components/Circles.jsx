import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircleCard from "./CircleCard";
import SideNav from "./SideNav";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Circles = () => {
  const navigate = useNavigate();
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/circles");
        if (res.ok) {
          const data = await res.json();
          setCircles(data);
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

  const allCircles = circles.map((circle, index) => (
    <CircleCard
      id={circle.id}
      key={index}
      name={circle.name}
      owner_id={circle.owner?.id}
      owner_name={circle.owner?.name}
    />
  ));
  const noCircle = <Text>No circle yet</Text>;

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <SimpleGrid columns={3} spacing={2}>
        {circles.length > 0 ? allCircles : noCircle}
      </SimpleGrid>
    </Flex>
  );
};

export default Circles;
