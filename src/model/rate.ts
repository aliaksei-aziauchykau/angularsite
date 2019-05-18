export interface Rate extends BaseRate {
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
  question5?: string;
  rate?: number;
  survey?: string;
  expert?: string;
  draft?: boolean;
}

export interface BaseRate {
  _id?: string;
}
