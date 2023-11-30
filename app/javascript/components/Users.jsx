import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import SideNav from "./SideNav";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
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

  const allUsers = users.map((user, index) => (
    <UserCard
      id={user.id}
      key={index}
      name={user.name}
      is_system_admin={user.is_system_admin}
      bio={user.bio}
    />
  ));
  const noUser = <Text>No user yet</Text>;

  return (
    <Flex direction="row" overflow="hidden" gap={2}>
      <Flex direction="row">
        <SideNav />
      </Flex>
      <SimpleGrid columns={3} spacing={2}>
        {users.length > 0 ? allUsers : noUser}
      </SimpleGrid>
    </Flex>
  );
};

export default Users;
