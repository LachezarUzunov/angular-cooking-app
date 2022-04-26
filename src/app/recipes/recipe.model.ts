export interface Recipe {
  id: string | null;
  title: string;
  ingredients: Array<[]>;
  preparation: string;
  categories: Object[];
  suitableFor: Number;
}
