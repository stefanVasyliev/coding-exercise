export interface IUserSocialPlatform {
  altId: string;
  createdUtc: string;
  handle: string;
  id: string;
  link: string;
  socialPlatform: number;
  userId: string;
}

export interface IProfileContentCard {
  childCount: number;
  content: {
    altId: string;
    categoryAltId: string;
    contentType: number;
    createdUtc: string;
    hasPhoto: true;
    id: string;
    imageUpdatedUtc: string;
    isDeleted: boolean;
    isDirectLinkEnabled: boolean;
    isDraft: boolean;
    isEditable: boolean;
    isEmbedEnabled: boolean;
    isFeatured: true;
    link: string;
    mimeType: number;
    socialPlatform: number;
    sortOrder: number;
    title: string;
    updatedUtc: string;
    userId: string;
  };
  imageCount: number;
  videoCount: number;
}
export interface IUserData {
  about: string;
  altId: string;
  categoryId: string;
  createdUtc: string;
  fullName: string;
  handle: string;
  hasPhoto: boolean;
  id: string;
  imageUpdatedUtc: string;
  updatedUtc: string;
  urlPath: string;
  userType: number;
}

export interface IProfileData {
  user: IUserData;
  userSocialPlatform: IUserSocialPlatform[];
  content: IProfileContentCard[];
}
