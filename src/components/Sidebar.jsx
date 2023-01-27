import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({setSelectedCategory,selectedCategory}) => {
  const selectCategory = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories &&
        categories.map((category) => (
          <button
            className="category-btn"
            onClick={()=>{setSelectedCategory(category?.name)}}
            style={{
              background: category?.name === selectCategory && "#FC1503",
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category?.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectCategory ? "1" : "0.8",
              }}
            >
              {category?.name}
            </span>
          </button>
        ))}
    </Stack>
  );
};

export default Sidebar;
