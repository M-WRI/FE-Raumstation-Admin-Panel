import { IUser, IUserResponse } from "../types/user.types";

export const UserSerializer = (res: IUserResponse): IUser => {
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

    bookingList: res.booking_list,
  };
};
