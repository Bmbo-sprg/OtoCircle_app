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

const NewUserForm = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [isSystemAdmin, setIsSystemAdmin] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      alert(errors.join(", "));
      setErrors([]);
    }
  }, [errors, setErrors]);

  // TODO: stripHtmlEntities

  const onClickSubmitButton = async (e) => {
    e.preventDefault();

    if (loginId === "" || isSystemAdmin === null || name === null) {
      setErrors(["ログインIDと名前は必須です"]);
      return;
    } else if (password1 !== password2) {
      setErrors(["パスワードが一致しません"]);
      return;
    } else if (password1.length < 6) {
      setErrors(["パスワードは6文字以上にしてください"]);
      return;
    }

    try {
      const res = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_id: loginId,
          is_system_admin: isSystemAdmin,
          name,
          bio,
          password: password1,
          password_comfirmation: password2,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        navigate(`/users/${data.id}`);
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
        <FormLabel htmlFor="loginId">ログインID</FormLabel>
        <Input
          id="loginId"
          name="loginId"
          type="text"
          onChange={(e) => setLoginId(e.target.value)}
        />

        <FormLabel htmlFor="name">ユーザー名</FormLabel>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <FormLabel htmlFor="password1">パスワード</FormLabel>
        <Input
          id="password1"
          name="password1"
          type="password"
          onChange={(e) => setPassword1(e.target.value)}
        />

        <FormLabel htmlFor="password2">パスワード（確認）</FormLabel>
        <Input
          id="password2"
          name="password2"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="bio">自己紹介</FormLabel>
          <Textarea
            id="bio"
            name="bio"
            onChange={(e) => setBio(e.target.value)}
          />
      </FormControl>
      <Button onClick={onClickSubmitButton}>ユーザーを作成</Button>
    </form>
  );
};

export default NewUserForm;
