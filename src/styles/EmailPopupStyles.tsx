import { makeStyles } from "@material-ui/core/styles";

export const useEmailPopupStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));