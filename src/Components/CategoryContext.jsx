import { createContext } from "react"
import Category from "./Category"

const CategoryContext = createContext({
    data : <Category />
});

export default CategoryContext;