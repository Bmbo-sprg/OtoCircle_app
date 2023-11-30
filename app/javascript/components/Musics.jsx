import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MusicCard from "./MusicCard";
import SideNav from "./SideNav";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Musics = () => {
  const navigate = useNavigate();
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/musics");
        if (res.ok) {
          const data = await res.json();
          setMusics(data);
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

  const allMusics = musics.map((music, index) => (
    <MusicCard
      id={music.id}
      key={index}
      name={music.name}
      composer_id={music.composer.id}
      composer_name={music.composer.name}
      length={music.length}
      bpm={music.bpm}
      description={music.description}
      created_at={music.created_at}
    />
  ));
  const noMusic = <Text>No music yet</Text>;

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <SimpleGrid columns={3} spacing={2}>
        {musics.length > 0 ? allMusics : noMusic}
      </SimpleGrid>
    </Flex>
  );
};

export default Musics;
