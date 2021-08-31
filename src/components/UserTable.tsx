import React, { FC, useState, useEffect } from "react";

import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { EmailPopup } from "./EmailPopup";
import { Loader } from "./Loader";

const useStyles = makeStyles({
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

export const UserTable: FC = () => {
  const classes = useStyles();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gorest.co.in/public-api/users`)
      .then((result) => setUsersData(result.data.data));
  }, []);

  interface User {
    id: number;
    name: string;
    email: string;
  }

  return (
    <React.Fragment>
      {usersData.length ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  classes={{
                    root: classes.head,
                  }}
                >
                  Имя
                </TableCell>
                <TableCell
                  classes={{
                    root: classes.head,
                  }}
                >
                  Электронная почта
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersData.map((user: User) => (
                <TableRow
                  classes={{
                    root: classes.row,
                  }}
                  key={user.id}
                >
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    {<EmailPopup id={user.id} email={user.email} />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};
