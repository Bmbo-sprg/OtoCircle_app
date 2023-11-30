import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import {
  Button,
  Flex,
  Heading,
  Link,
  Table,
  Text,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from "@chakra-ui/react";

const NewMusic = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [music, setMusic] = useState({
    name: "",
    composer: {
      id: 0,
      name: ""
    },
    length: 0,
    bpm: 0,
    description: "",
    created_at: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/v1/musics/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setMusic(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (err) {
        console.error(err);
        navigate("/musics");
      }
    };
    fetchData();
  }, []);

  const onClickDeleteButton = async () => {
    try {
      const res = await fetch(`/api/v1/musics/${params.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        },
      });
      if (res.ok) {
        alert("削除しました");
        navigate("/musics");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <Flex direction="column" w="100%" px={2} gap={2} overflow="hidden">
        <Heading size="md" my={8}>{music.name}</Heading>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th>作曲者</Th>
                <Td>
                  <Link href={`/composers/${music.composer.id}`}>{music.composer.name}</Link>
                </Td>
              </Tr>
              <Tr>
                <Th>長さ</Th>
                <Td>{music.length}</Td>
              </Tr>
              <Tr>
                <Th>BPM</Th>
                <Td>{music.bpm}</Td>
              </Tr>
              <Tr>
                <Th>説明</Th>
                <Td>{music.description}</Td>
              </Tr>
              <Tr>
                <Th>投稿日</Th>
                <Td>{music.created_at}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Button colorScheme="red" onClick={onClickDeleteButton}>
          <Text>この楽曲を削除する</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewMusic;
