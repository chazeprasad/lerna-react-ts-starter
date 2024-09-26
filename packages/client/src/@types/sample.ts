
export type ISampleItem = {
  id: string;
  title: string;
  description: string;
};

export type ISampleState = {
  isLoading: boolean;
  error: Error | string | null;
  items: ISampleItem[];
};
