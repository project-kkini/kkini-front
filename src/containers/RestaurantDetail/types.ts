export type NeedsTag = {
  id: number;
  text: string;
  ratio: number;
};

export type PriceTag = {
  id: number;
  text: string;
};

export type Review = {
  id: number;
  isFirst?: boolean;
  user: {
    id: number;
    name: string;
    profileImageUrl: string;
  };
  content: string;
  imageUrl: string[];
  createdAt: string;
};

export type Restaurant = {
  id: number;
  name: string;
  address: string;
  roadAddress: string;
  distance: number;
  menuCategory: string;
  needsTags: NeedsTag[];
  priceTags: PriceTag[];
  restaurantImageUrls: string[];
  myReview: {
    id: number;
    content: string;
    imageUrl: string[];
    createdAt: string;
  };
  reviews: Review[];
};
