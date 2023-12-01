import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideNav from "./SideNav";
import {
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Table,
  Text,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  UnorderedList,
} from "@chakra-ui/react";

const Circle = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [circle, setCircle] = useState({
    name: "",
    owner: {
      id: 0,
      name: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/v1/circles/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setCircle(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (err) {
        console.error(err);
        navigate("/circles");
      }
    };
    fetchData();
  }, []);

  const onClickDeleteButton = async () => {
    try {
      const res = await fetch(`/api/v1/circles/${params.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        },
      });
      if (res.ok) {
        alert("削除しました");
        navigate("/circles");
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
        <Heading size="md" my={8}>{circle.name}</Heading>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th>代表</Th>
                <Td>
                  <Link href={`/users/${circle.owner?.id}`}>{circle.owner?.name}</Link>
                </Td>
              </Tr>
              <Tr>
                <Th>メンバー</Th>
                <Td>
                  <UnorderedList>
                    {circle.users && circle.users.map((user) => (
                      <ListItem key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Button colorScheme="red" onClick={onClickDeleteButton}>
          <Text>このサークルを削除する</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Circle;
