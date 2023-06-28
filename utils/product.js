import { get } from "./request";
export const loadProductAPI = ({ page, category, per, name }) => get("/api/v1/products", { page, category, per, name })
export const loadProductByIdAPI = (id) => get("/api/v1/products/" + id)

export const loadCategoriesAPI = () => get("/api/v1/product_categories")