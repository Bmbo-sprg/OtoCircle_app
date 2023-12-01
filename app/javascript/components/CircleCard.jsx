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

const CircleCard = (props) => {
  const {
    id,
    name,
    owner_id,
    owner_name,
  } = props;

  return (
    <Card maxH="50vh" overflow="hidden">
      <CardHeader>
        <Link href={`/circles/${id}`}><Heading size="md">{name}</Heading></Link>
      </CardHeader>

      <CardBody>
        <Text>{"代表: "}</Text>
        <Link href={`/users/${owner_id}`}>{owner_name}</Link>
      </CardBody>
    </Card>
  )
};

export default CircleCard;
