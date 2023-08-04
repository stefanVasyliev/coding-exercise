import { ROUTES } from "@/utils/constants/Routes";
import Link from "next/link";
import Image from 'next/image'
import React, { FC } from "react";
import { HoobeIcon } from "@/utils/icons/HoobeIcon";
import styles from "@/styles/Home.module.scss";
import { IProfileContentCard, IProfileData, IUserSocialPlatform } from "@/types";
import ListOfContentCards from "@/views/components/ListOfContentCards";
import { motion } from 'framer-motion';
import ListOfSocLinks from "@/views/components/ListOfSocLinks";

interface Props {
  data: IProfileData
}

const HomePage: FC<Props> = ({ data }) => {

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div variants={container}
      initial="hidden"
      animate="visible" className={styles.home__layout}>
      <div className={`${styles.home__container}`}>
        <motion.div variants={item} className={`${styles.home__container__panel}`}>
          <Image className={styles.home__container__photo} width={208} height={208} src="/images/hoobe-icon.png" alt="hoo.be coding exercise" />
          <span className={styles.home__container__name}>{data.user.fullName}</span>
          {!!data?.userSocialPlatform?.length &&
            <div className={styles.home__container__links}>
              {data?.userSocialPlatform.map((soc: IUserSocialPlatform) => (
                <Link key={soc.id} href={soc.link} target="_blank">
                  <ListOfSocLinks link={soc.link} />
                </Link>
              ))}
            </div>}
        </motion.div>
        <div className={styles.home__container__items}>
          {!!data?.content?.length && data.content.map((card: IProfileContentCard) =>
            <motion.div key={card.content.id} variants={item}>
              <ListOfContentCards key={card.content.id} card={card} />
            </motion.div>)}
        </div>
      </div>
      <motion.div variants={item} className={styles.home__footer}>
        <button className={styles.home__footer__create__button}>
          <span><HoobeIcon /></span>
          create your hoo.be
        </button>
        <Link href={ROUTES.login} className={styles.home__footer__login__link} >login</Link>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
