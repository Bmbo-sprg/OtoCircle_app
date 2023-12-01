import { Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

export default () => {
  return (
    <Flex direction="column" h="100vh" w="200px" bg="gray.100" p={4}>
      <Heading size="md" mb={8}>
        <Link href="/">OtoCircle</Link>
      </Heading>
      <Flex direction="column" mb={8}>
        <Link href="/musics">音楽を探す</Link>
        <Link href="/playlists">プレイリストを探す</Link>
        <Link href="/circles">サークルを探す</Link>
        <Link href="/composers">作曲者を探す</Link>
        <Link href="/users">ユーザーを探す</Link>
      </Flex>
      <Flex direction="column" mb={8}>
        <Link href="/musics/new">音楽を投稿する</Link>
        <Link href="/playlists/new">プレイリストを作る</Link>
        <Link href="/circles/new">サークルを作る</Link>
        <Link href="/composers/new">作曲者を作る</Link>
        <Link href="/users/new">ユーザーを作る</Link>
      </Flex>
      <Flex direction="column" mb={8}>
        <Link href="/users/1">me</Link>
      </Flex>
    </Flex>
  );
}
