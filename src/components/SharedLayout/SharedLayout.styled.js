import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;  
`;

export const Header = styled.header`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
    box-shadow: 0px 5px 3px 0px rgba(166,166,166,0.6);

    > nav {
        display: flex;
      }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;