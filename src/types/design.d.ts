interface IDesign {
  id: string;
  name: string;
  description: string;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface CreateDesignDto {
  name: string;
  description: string;
}

// interface FindDesign
type FindDesignParams = {
  published?: boolean;
  width?: number;
  height?: number;
  userId?: string;
  take?: number;
  skip?: number;
};
