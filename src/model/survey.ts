import { Rate } from './rate';
import { User } from './user';

export interface Survey extends BaseSurvey {
  discipline?: string;
  title?: string;
  summary?: string;
  contribution?: string;
  proof1?: string;
  proof2?: string;
  proof3?: string;
  proof4?: string;
  proof5?: string;
  description?: string;
  proof?: string;
  filledBy?: string;
  expertOne?: string;
  expertTwo?: string;
  experts?: [User];
  rates?: [Rate];
}

export interface BaseSurvey {
  _id?: string;
}
