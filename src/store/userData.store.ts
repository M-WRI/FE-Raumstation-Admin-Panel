import { createSlice } from "@reduxjs/toolkit";
// Components
import { UserProfileSerializer } from "../serielizer/User.serializer";
// DATA
import userData from "../api/mocks/userData.json";
// Types
import { IUser } from "../types/user.types";

const initialState: IUser = UserProfileSerializer(userData);

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default user.reducer;
