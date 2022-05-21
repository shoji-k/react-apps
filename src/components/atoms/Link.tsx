import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
};

export const Link: React.FC<Props> = ({ children, to }) => (
  <ReactRouterLink
    to={to}
    className="no-underline hover:underline text-teal-500"
  >
    {children}
  </ReactRouterLink>
);
