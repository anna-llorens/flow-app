import { Link } from "react-router-dom";
import { TeamFlow } from "../../components/flow/team-flow";
import styled from "styled-components";

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
      <TeamFlow width={WIDTH} height={HEIGHT} />
    </div>
  );
};
