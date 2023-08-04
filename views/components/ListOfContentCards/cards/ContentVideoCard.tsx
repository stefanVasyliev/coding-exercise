import { IProfileContentCard } from "@/types";
import React, { FC } from "react";
import styles from "@/styles/Home.module.scss";

interface Props { card: IProfileContentCard }

const ContentVideoCard: FC<Props> = ({ card }) => (
  <div className={`${styles.home__container__item} ${styles.home__container__item__video}`} >
    <iframe
      src={card.content.link}
      title={card.content.title}
      loading="lazy">
    </iframe>
  </div>
)

export default ContentVideoCard;
