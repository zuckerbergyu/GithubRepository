import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Star } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Repository } from "../../../types";
import HeartIcon from "../../Icons/HeartIcon";
import favoritList from "../../../libs/favoritList";
import { languageColor } from "../../../constants/languageColor";
type Props = {
  item: Repository;
};

const SearchItem = (props: Props) => {
  const saveItem = {
    id: props.item.id,
    name: props.item.name,
    description: props.item.description,
    language: props.item.language,
    stargazers_count: props.item.stargazers_count,
    open_issues_count: props.item.open_issues_count,
    owner: {
      avatar_url: props.item.owner.avatar_url,
      login: props.item.owner.login,
    },
  };

  const [isFavorite, setIsFavorite] = useState(
    favoritList.isFavorite(saveItem)
  );

  return (
    <Box
      sx={{
        padding: "10px 0",
        borderBottom: `1px solid black`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "6px" }}
        >
          <img
            style={{ width: "24px", height: "24px", marginRight: "10px" }}
            src={props.item.owner?.avatar_url}
          />
          <Typography sx={{ fontSize: "14px" }}>
            {props.item.owner?.login}
          </Typography>
        </Box>
        <IconButton
          onClick={() => {
            if (favoritList.isFavorite(saveItem)) {
              favoritList.clearItem(saveItem);
              setIsFavorite(favoritList.isFavorite(saveItem));
            } else {
              if (favoritList.get().length < 4) {
                favoritList.push(saveItem);
                setIsFavorite(favoritList.isFavorite(saveItem));
              } else {
                alert("초과");
              }
            }
          }}
        >
          <HeartIcon
            size={30}
            fill={isFavorite ? "red" : "white"}
            color={isFavorite ? "red" : "gray"}
          />
        </IconButton>
      </Box>
      <Typography sx={{ marginBottom: "10px" }}>{props.item.name}</Typography>
      <Typography sx={{ marginBottom: "10px" }}>
        {props.item.description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Star
          sx={{
            width: 24,
            height: 24,
            color: "darkGreen",
          }}
        />
        <Typography sx={{ margin: "0px 10px" }}>
          {props.item.stargazers_count}
        </Typography>
        <Box
          sx={{
            width: "20px",
            height: "20px",
            background: languageColor[props.item.language],
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ marginLeft: "10px" }}>
          {props.item.language}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchItem;
