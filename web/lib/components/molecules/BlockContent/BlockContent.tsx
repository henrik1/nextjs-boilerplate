import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import BlockRenderer from "./BlockRenderer";
import { Typography } from "../../atoms";

type BlockContentProps = { blocks: any[]; defaultFont?: "body1" | "body2" };

export const BlockContent = ({ blocks }: BlockContentProps) => {
  if (typeof blocks === "string") return <Typography variant="body1">{blocks}</Typography>;

  return blocks ? (
    <SanityBlockContent
      blocks={blocks}
      serializers={{ types: { block: BlockRenderer, hardBreak: <br/> } }}
    />
  ) : null;
};

export default BlockContent;
