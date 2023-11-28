import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/user";
import { useState } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [email, setemail] = useState("");

  const user = useSelector((state) => state.user.value);

  return (
    <div>
      {!user.name && (
        <div>
          <input
            type="text"
            placeholder="enter name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
      )}

      {!user.name ? (
        <button onClick={() => dispatch(login({ name, age, email }))}>
          Login
        </button>
      ) : (
        <button
          onClick={() => dispatch(login({ name: "", age: 0, email: "" }))}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
