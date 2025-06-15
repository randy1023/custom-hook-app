import { useForm } from "../hooks";

export const FormWithCustomHook = () => {
  const { email, password, username, onInputChange, onFormReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>formulario con custom hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onFormReset}>
        Reset
      </button>
    </>
  );
};
