import { createSlice } from "@reduxjs/toolkit";
// Components
import { UserListSerializer } from "../serielizer/User.serializer";
// DATA
import userListData from "../api/mocks/userList.json"

// Types
import { IUser } from "../types/user.types";

const initialState: IUser[] = UserListSerializer(userListData);

export const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {},
});

export default userList.reducer;
