import ClipLoader from "react-spinners/ClipLoader";
import Container from "@material-ui/core/Container";
import { FC } from "react";
import { useLoaderStyles } from "../styles/LoaderStyles";

export const Loader: FC = () => {
  const classes = useLoaderStyles();

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
