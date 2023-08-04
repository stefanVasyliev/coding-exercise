import { IProfileContentCard } from "@/types";
import React, { FC } from "react";
import ContentVideoCard from "./cards/ContentVideoCard";
import ContentCustomCard from "./cards/ContentCustomCard";

interface Props { card: IProfileContentCard }


const ListOfContentCards: FC<Props> = ({ card }) => {
  switch (card.content.contentType) {
    case 1:
      return <ContentCustomCard card={card} />
    case 2:
      return <ContentVideoCard card={card} />
    default: <></>
  }
};

export default ListOfContentCards;
