import { ICompany, ICompanyResponse } from "../types/company.types";

export const CompanySerializer = (res: ICompanyResponse): ICompany => {
  return {
    id: res.id,
    user: res.user,
    companyName: res.company_name,
    description: res.description,
    industry: res.industry,
  };
};
