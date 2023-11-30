import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

const UserCard = (props) => {
  const {
    id,
    name,
    is_system_admin,
    bio,
  } = props;

  return (
    <Card maxH="50vh" overflow="hidden">
      <CardHeader>
        <Link href={`/users/${id}`}><Heading size="md">{name}</Heading></Link>
        <Heading size="sm">{is_system_admin ? "システム管理者" : "ユーザー"}</Heading>
      </CardHeader>

      <CardBody>
        <Heading size="xs">{"自己紹介"}</Heading>
        <Text>{bio}</Text>
      </CardBody>
    </Card>
  )
};

export default UserCard;
