import { IClasses } from '~/context/AppProvider';

export interface IPageContext {
  root: string;
  pageTitle: string;
  baseUrl: string;
  identifier: string;
  sandBoxApiUrl: string;
  dark?: IClasses;
  light?: IClasses;
}
