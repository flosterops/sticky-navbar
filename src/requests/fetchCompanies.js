import axios from "axios";

export const fetchCompanies = async () => {
  const { data } = await axios.get("/data.json");
  if (!data) {
    return [];
  }
  return data;
};
