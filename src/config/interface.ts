import { IClasses } from '~/context/AppProvider';

export interface IPageContext {
  root: string;
  pageTitle: string;
  baseUrl: string;
  sandBoxApiUrl: string;
  dark?: IClasses;
  light?: IClasses;
  brand_name?: string;
  app_name?: string;
  brand_support_email?: string;
  brand_website_url?: string;
  brand_streetaddress1?: string;
  brand_city?: string;
  brand_state?: string;
  brand_postalcode?: string;
  brand_phone?: string;
}
