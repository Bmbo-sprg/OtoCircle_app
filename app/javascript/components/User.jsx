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

const User = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    login_id: "",
    name: "",
    is_system_admin: false,
    bio: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/v1/users/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (err) {
        console.error(err);
        navigate("/users");
      }
    };
    fetchData();
  }, []);

  const onClickDeleteButton = async () => {
    try {
      const res = await fetch(`/api/v1/users/${params.id}`, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        },
      });
      if (res.ok) {
        alert("削除しました");
        navigate("/users");
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
        <Heading size="md" my={8}>{user.name}</Heading>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th>ログインID</Th>
                <Td>{user.login_id}</Td>
              </Tr>
              <Tr>
                <Th>パスワード</Th>
                <Td>{"********"}</Td>
              </Tr>
              <Tr>
                <Th>システム管理権限</Th>
                <Td>{user.is_system_admin ? "はい" : "いいえ"}</Td>
              </Tr>
              <Tr>
                <Th>自己紹介</Th>
                <Td>{user.bio}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Button colorScheme="red" onClick={onClickDeleteButton}>
          <Text>このユーザーを削除する</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default User;
