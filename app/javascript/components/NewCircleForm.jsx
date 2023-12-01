import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Select,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCircleForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [members, setMembers] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      alert(errors.join(", "));
      setErrors([]);
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/v1/users`);
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [errors, setErrors]);

  // TODO: stripHtmlEntities

  const onChangeMember = (e) => {
    setMembers([...members, users.find((user) => user.id === parseInt(e.target.value))]);
  };

  const onChangeOwner = (e) => {
    if (e.target.value !== null) {
      setMembers([...members, users.find((user) => user.id === parseInt(e.target.value))]);
    }
    setOwner(e.target.value);
  };

  const onClickSubmitButton = async (e) => {
    e.preventDefault();

    if (!name) {
      setErrors(["名前は必須です"]);
      return;
    }

    try {
      const res = await fetch("/api/v1/circles", {
        method: "POST",
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          owner_id,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        navigate(`/circles/${data.id}`);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form>
      <FormControl isRequired>
        <FormLabel htmlFor="name">サークル名</FormLabel>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <FormLabel htmlFor="owner">サークル代表</FormLabel>
        <Select
          id="owner"
          name="owner"
          onChange={onChangeOwner}
        >
          <option value={null}>{"サークル代表を選択"}</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </Select>
      </FormControl>

      <Text>{"メンバーを入れる"}</Text>
      <UnorderedList>
        {members.map((member) => (
          <ListItem key={member.id}>{member.name}</ListItem>
        ))}
      </UnorderedList>
      <Select
        id="member"
        name="member"
        onChange={onChangeMember}
      >
        <option value={null}>{"メンバーを選択"}</option>
        {users.map((user) => {
          if (members.some((member) => member.id === user.id)) {
            return null;
          } else {
            return <option key={user.id} value={user.id}>{user.name}</option>
          }
        })}
      </Select>
      <Button onClick={onClickSubmitButton}>{"サークルを作成"}</Button>
    </form>
  );
};

export default NewCircleForm;
