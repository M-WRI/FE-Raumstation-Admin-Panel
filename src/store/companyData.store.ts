import { createSlice } from "@reduxjs/toolkit";
// Components
import { CompanySerializer } from "../serielizer/Company.serializer";
// DATA
import companyData from "../api/mocks/companyData.json";
// Types
import { ICompany } from "../types/company.types";

const initialState: ICompany = CompanySerializer(companyData);

export const company = createSlice({
  name: "company",
  initialState,
  reducers: {},
});

export default company.reducer;
