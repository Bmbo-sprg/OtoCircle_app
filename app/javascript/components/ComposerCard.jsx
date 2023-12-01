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

const ComposerCard = (props) => {
  const {
    id,
    name,
  } = props;

  return (
    <Card maxH="50vh" overflow="hidden">
      <CardHeader>
        <Link href={`/composers/${id}`}><Heading size="md">{name}</Heading></Link>
      </CardHeader>
    </Card>
  )
};

export default ComposerCard;
