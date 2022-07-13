import { IUser, IUserResponse } from "../types/user.types";

export const UserSerializer = (res: IUserResponse): IUser => {
  return {
    id: res.id,
    role: res.role,
    profileImage: res.profile_image ? res.profile_image : null,
    firstName: res.first_name,
    lastName: res.last_name,
    email: res.email,
    floor: res.floor,
    seat: res.seat,

    companyDetails: {
      id: res.company_details.id,
      companyName: res.company_details.company_name,
      description: res.company_details.description,
      industry: res.company_details.industry,
    },
  };
};
