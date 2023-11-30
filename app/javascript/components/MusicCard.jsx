import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const MusicCard = (props) => {
  const {
    id,
    name,
    composer_id,
    composer_name,
    length,
    bpm,
    description,
    created_at
  } = props;

  const navigate = useNavigate();

  return (
    <Card maxH="50vh" overflow="hidden">
      <CardHeader>
        <Link href={`/musics/${id}`}><Heading size="md">{name}</Heading></Link>
        <Link href={`/composers/${composer_id}`}>{composer_name}</Link>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing={4}>
          <Box>
            <Text>{"長さ: "}</Text>
            <Text>{length}</Text>
          </Box>
          <Box>
            <Text>{"BPM: "}</Text>
            <Text>{bpm}</Text>
          </Box>
          <Box>
            <Heading size="xs">{"説明"}</Heading>
            <Text>{description}</Text>
          </Box>
          <Box>
            <Text>{"投稿日: "}</Text>
            <Text>{created_at}</Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
};

export default MusicCard;
