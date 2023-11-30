import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMusicForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [composerId, setComposerId] = useState(null);
  const [length, setLength] = useState(null);
  const [bpm, setBpm] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [description, setDescription] = useState("");
  const [visibleTo, setVisibleTo] = useState("global");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      alert(errors.join(", "));
      setErrors([]);
    }
  }, [errors, setErrors]);

  // TODO: stripHtmlEntities

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || composerId === null || visibleTo === null) {
      setErrors(["曲名、作曲者は必須です", name, composerId]);
      return;
    }

    try {
      const res = await fetch("/api/v1/musics", {
        method: "POST",
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          composer_id: composerId,
          length,
          bpm,
          lyrics,
          description,
          visible_to: visibleTo,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        navigate(`/musics/${data.id}`);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="name">曲名</FormLabel>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <FormLabel htmlFor="composerId">作曲者</FormLabel>
        <Input
          id="composerId"
          name="composerId"
          type="number"
          onChange={(e) => setComposerId(e.target.value)}
        />

        <FormLabel htmlFor="length">長さ (秒)</FormLabel>
        <Input
          id="length"
          name="length"
          type="number"
          onChange={(e) => setLength(e.target.value)}
        />

        <FormLabel htmlFor="bpm">BPM</FormLabel>
        <Input
          id="bpm"
          name="bpm"
          type="number"
          onChange={(e) => setBpm(e.target.value)}
        />

        <FormLabel htmlFor="lyrics">歌詞</FormLabel>
        <Textarea
          id="lyrics"
          name="lyrics"
          onChange={(e) => setLyrics(e.target.value)}
        />

        <FormLabel htmlFor="description">説明</FormLabel>
        <Textarea
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <FormLabel htmlFor="visibleTo">公開範囲</FormLabel>
        <Select
          id="visibleTo"
          name="visibleTo"
          onChange={(e) => setVisibleTo(e.target.value)}
        >
          <option value="global">全体に公開</option>
          <option value="circle">サークルに公開</option>
          <option value="private">自分のみに公開</option>
        </Select>
      </FormControl>
      <Button onClick={handleSubmit}>投稿</Button>
    </form>
  );
};

export default NewMusicForm;