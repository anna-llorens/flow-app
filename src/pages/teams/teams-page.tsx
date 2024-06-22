import "reactflow/dist/style.css";

import { Link } from "@mui/material";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { Routes } from "../../routes";

const LinksWrapper = styled.section`
  display: flex;
  gap: 16px;
`;

const Separator = styled.span`
  color: #1976d2;
`;

export const TeamsPage = () => {
  return (
    <>
      <h4>Team Page</h4>
      <LinksWrapper>
        <Link href={Routes.teamOrg}>Org</Link>
        <Separator> / </Separator>
        <Link href={Routes.teamMembers}>Members</Link>
      </LinksWrapper>
      <Outlet />
    </>
  );
};
