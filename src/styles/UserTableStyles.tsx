import { makeStyles } from "@material-ui/core/styles";

export const useUserTableStyles = makeStyles({
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#f3f3f3",
    },
  },
  head: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontSize: 16,
  },
});
