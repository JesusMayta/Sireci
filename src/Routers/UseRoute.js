import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const UserRoute = ({ children, ...rest }) => {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest]);

  return <Route {...rest} />;
};
