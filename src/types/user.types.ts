export interface IBookingListTime {
  from: string;
  to: string;
}

export interface IBookingList {
  id: string;
  type: string;
  date: string;
  name: string;
  time: IBookingListTime;
}

export interface IUserResponse {
  id: string;
  role: string;
  profile_image: string | null;
  first_name: string;
  last_name: string;
  email: string;
  position: {
    floor: string;
    seat: string;
  };

  booking_list: IBookingList[];
}

export interface IUser {
  id: string;
  role: string;
  profileImage: string | null;
  firstName: string;
  lastName: string;
  email: string;
  position: {
    floor: string;
    seat: string;
  };

  bookingList: IBookingList[];
}
