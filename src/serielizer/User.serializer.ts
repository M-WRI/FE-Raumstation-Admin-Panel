import { IUser, IUserResponse } from "../types/user.types";

export const UserProfileSerializer = (res: IUserResponse): IUser => {
  return {
    id: res.id,
    role: res.role,
    profileImage: res.profile_image ? res.profile_image : null,
    firstName: res.first_name,
    lastName: res.last_name,
    email: res.email,
    position: {
      floor: res.position.floor,
      seat: res.position.seat,
    },
  };
};

export const UserListSerializer = (res: IUserResponse[]): IUser[] => {
  return res.map((user: IUserResponse) => {
    return {
      id: user.id,
      role: user.role,
      profileImage: user.profile_image ? user.profile_image : null,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      position: {
        floor: user.position.floor,
        seat: user.position.seat,
      },
    };
  });
};
