interface PropertySearchResult {
  name: string;
  image: string;
  score: number;
  price: number;
  discount: number;
  nbr_of_reviews: number;
  additional_label?: string;
  free_cancellation: boolean;
}
