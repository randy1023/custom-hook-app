import PropTypes from "prop-types";
import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//   id: 123,
//   name: "randy gonzalez",
//   email: "randygonzalezR@gmail.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.any,
};
