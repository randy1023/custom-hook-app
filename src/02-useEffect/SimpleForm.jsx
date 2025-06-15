import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Striker75",
    email: "randy2763@gmail.com",
  });
  const { username, email } = formState;
  const onInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
   // console.log("useEffect called");
  },[]);
  useEffect(() => {
   // console.log("useEffect changed");
  }, [formState]);

  return (
    <>
      <h1>Simple form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "Striker75" && <Message />}
    </>
  );
};
