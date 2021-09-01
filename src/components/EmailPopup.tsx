import React, { FC, useState } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { EmailPopupProps } from "../interfaces/EmailPopupProps";
import { useEmailPopupStyles } from "../styles/EmailPopupStyles";
import { getPostCountByUser } from "../utils/getPostCountByUser";
import { Box } from "@material-ui/core";


export const EmailPopup: FC<EmailPopupProps> = ({ id, email }) => {
  const classes = useEmailPopupStyles();
  const [anchor, setAnchor] = useState<(EventTarget & HTMLSpanElement) | null>(
    null
  );
  const [postCount, setPostCount] = useState("");

  const onHoverHandler = (id: number) =>
      getPostCountByUser(id)
      .then((result) =>
        setPostCount(`Количество постов: ${result.data.data.length}`)
      );

  return (
    <React.Fragment>
      <Typography
        onMouseEnter={(e) => setAnchor(e.currentTarget)}
        onMouseLeave={() => setAnchor(null)}
        aria-owns={anchor ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
      >
        <Box component="span" onMouseOver={() => onHoverHandler(id)}>{email}</Box>
      </Typography>
      {postCount && (
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={!!anchor}
          anchorEl={anchor}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Typography>{postCount}</Typography>
        </Popover>
      )}
    </React.Fragment>
  );
};
