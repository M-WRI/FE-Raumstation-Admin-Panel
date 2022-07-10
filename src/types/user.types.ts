export interface ICompanyDetailsResponse {
  id: string;
  company_name: string;
  description: string;
  industry: string;
}

export interface IUserResponse {
  id: string;
  role: string;
  profile_image: string | null;
  first_name: string;
  last_name: string;
  email: string;
  floor: number;
  seat: number;

  company_details: ICompanyDetailsResponse;
}

export interface ICompanyDetails {
  id: string;
  companyName: string;
  description: string;
  industry: string;
}

export interface IUser {
  id: string;
  role: string;
  profileImage: string | null;
  firstName: string;
  lastName: string;
  email: string;
  floor: number;
  seat: number;

  companyDetails: ICompanyDetails;
}
