import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Category(){

    
  const navigate = useNavigate(); 
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

 
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue); 

    if (selectedValue === "Fiction") {
      navigate("/fiction");
    } else if (selectedValue === "Non-Fiction") {
      navigate("/non-fiction");
    } else if (selectedValue === "Sci-Fi") {
      navigate("/sci-fi");
    } else if(selectedValue === "AllCategories"){
      navigate("/allcategories");
    }else{
      navigate("/allbooks")
    }
  };

    return (
        <>
        <select name="" id=""  value={selectedCategory} onChange={handleCategoryChange} className="absolute right-4 top-44 border rounded p-1 lg:absolute top-54">
        <option value="Category">Category</option>
        <option value="AllCategory"> All Categories</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        </select>
        </>
    )
}
export default Category;


