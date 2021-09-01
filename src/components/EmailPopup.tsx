import { FC, useState } from "react";
import Popover from "@material-ui/core/Popover";
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
    getPostCountByUser(id).then((result) =>
      setPostCount(`Количество постов: ${result.data.data.length}`)
    );

  return (
    <Box
      onMouseEnter={(e) => setAnchor(e.currentTarget)}
      onMouseLeave={() => setAnchor(null)}
      onMouseOver={() => onHoverHandler(id)}
      component="span"
    >
      {[email, postCount && (
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={!!anchor}
          anchorEl={anchor}
        >
          {postCount}
        </Popover>
      )]}
    </Box>
  );
};
