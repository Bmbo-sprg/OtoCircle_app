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
          // setMusics(data);
          setMusics([
            {
              id: 1,
              name: "music1",
              composer_name: "composer1",
              length: "length1",
              bpm: "bpm1",
              description: "description1",
              created_at: "created_at1"
            },
            {
              id: 2,
              name: "music2",
              composer_name: "composer2",
              length: "length2",
              bpm: "bpm2",
              description: "description2",
              created_at: "created_at2"
            },
            {
              id: 3,
              name: "music3",
              composer_name: "composer3",
              length: "length3",
              bpm: "bpm3",
              description: "description3",
              created_at: "created_at3"
            },
            {
              id: 3,
              name: "music3",
              composer_name: "composer3",
              length: "length3",
              bpm: "bpm3",
              description: "description3",
              created_at: "created_at3"
            }
          ]);
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
      key={index}
      name={music.name}
      composer_name={music.composer_name}
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
