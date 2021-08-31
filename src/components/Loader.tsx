import { makeStyles } from "@material-ui/core/styles";
import ClipLoader from "react-spinners/ClipLoader";
import Container from "@material-ui/core/Container";
import { FC } from "react";

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    height: "100vh",
  },
});

export const Loader: FC = () => {
  const classes = useStyles();

  return (
    <Container
      classes={{
        root: classes.container,
      }}
    >
      <ClipLoader size={150} />
    </Container>
  );
};
