import { InstaIcon } from "@/utils/icons/InstaIcon";
import { ThreadsIcon } from "@/utils/icons/ThreadsIcon";
import { TikTokIcon } from "@/utils/icons/TikTokIcon";
import { TwitterIcon } from "@/utils/icons/TwitterIcon";
import React, { FC } from "react";

interface Props { link: string }


const ListOfSocLinks: FC<Props> = ({ link }) => {
  switch (true) {
    case link.includes("instagram"):
      return <InstaIcon />
    case link.includes("threads"):
      return <ThreadsIcon />
    case link.includes("tiktok"):
      return <TikTokIcon />
    case link.includes("twitter"):
      return <TwitterIcon />
    default: <></>
  }
};

export default ListOfSocLinks;
