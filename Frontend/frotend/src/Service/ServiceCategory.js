import axios from "axios";

const BASE_URL = "http://localhost:8082/categories";

export const addCategory = async (category) => {
  return await axios.post(BASE_URL, category, {
    headers: { "Content-Type": "application/json" }
  });
};

export const uploadCategoryImage = async (categoryId, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return await axios.post(`${BASE_URL}/${categoryId}/image`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const fetchCategories = async () => {
  return await axios.get(BASE_URL);
};

export const updateCategory = async (categoryId, category) => {
  return await axios.put(`${BASE_URL}/${categoryId}`, category);
};

export const deleteCategory = async (categoryId) => {
  return await axios.delete(`${BASE_URL}/${categoryId}`);
};
