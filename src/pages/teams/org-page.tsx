import { Link } from "react-router-dom";

import styled from "styled-components";
import { Flow } from "../../components/flow";
import { team1Edges, teamNodes } from "../../data/data";

const WIDTH = "600px";
const HEIGHT = "300px";

const ActionsMenu = styled.div`
  display: flex;
  justify-content: end;
`;

export const OrgPage = () => {
  return (
    <div style={{ width: WIDTH, height: HEIGHT }}>
      <ActionsMenu>
        <Link to="/teams/edit">Edit</Link>
      </ActionsMenu>
      <Flow
        width={WIDTH}
        height={HEIGHT}
        withBorder
        initialNodes={teamNodes}
        initialEdges={team1Edges}
      />
    </div>
  );
};
