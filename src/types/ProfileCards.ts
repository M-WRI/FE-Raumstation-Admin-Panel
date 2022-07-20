export interface ICompanyCardProps {
  companyName: string;
  description: string;
  industry: string;
}

export interface ProfileCardPosition {
  floor: string;
  seat: string;
}

export interface IProfileCardProps {
  name: string;
  email: string;
  position: ProfileCardPosition;
}
