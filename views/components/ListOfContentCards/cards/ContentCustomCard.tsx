import { IProfileContentCard } from "@/types";
import React, { FC } from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import { HoobeIcon } from "@/utils/icons/HoobeIcon";

interface Props { card: IProfileContentCard }


const ContentCustomCard: FC<Props> = ({ card }) => (
  <Link href={card.content.link}  target="_blank" className={`${styles.home__container__item} ${styles.home__container__item__post}`} style={{ backgroundImage: "url(/images/stars.jpg)" }}>
    <div className={styles.home__container__item__bottom}>
      <p>{card.content.title}</p>
      <HoobeIcon />
    </div>
  </Link>
)

export default ContentCustomCard;
