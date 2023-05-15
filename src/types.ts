export type Item = {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  "state-province"?: string;
  web_pages: string[];
};

export type Data = Item[] | null;
