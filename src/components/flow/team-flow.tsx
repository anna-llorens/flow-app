import { BackgroundVariant } from "reactflow";
import { Flow } from ".";
import { team1Edges, teamOrganization } from "../../data/data";
import React from "react";

type TeamFlowProps = {
  width?: string;
  height?: string;
  zoom?: boolean;
  draggable?: boolean;
  showControls?: boolean;
  showMiniMap?: boolean;
  background?: BackgroundVariant;
  withBorder?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const TeamFlow: React.FC<TeamFlowProps> = ({
  width,
  height,
  zoom,
  draggable,
  showControls,
  showMiniMap,
  background,
  withBorder,
  className,
  style,
}) => {
  return (
    <Flow
      initialNodes={teamOrganization}
      initialEdges={team1Edges}
      width={width}
      height={height}
      zoom={zoom}
      fitView={true}
      draggable={draggable}
      showControls={showControls}
      showMiniMap={showMiniMap}
      background={background}
      withBorder={withBorder}
      className={className}
      style={style}
    />
  );
};
