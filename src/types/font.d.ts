interface IFont {
  id: string;
  family: string;
  fullName: string;
  postScriptName: string;
  preview: string;
  style: string;
  url: string;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface QueryFontsPayload {
  userId: string;
}
