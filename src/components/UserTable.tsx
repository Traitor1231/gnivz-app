import React, { FC, useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { EmailPopup } from "./EmailPopup";
import { Loader } from "./Loader";
import { getFirstHundredUsers } from "../utils/getFirstHundredUsers";
import { User } from "../interfaces/User";
import { useUserTableStyles } from "../styles/UserTableStyles";

export const UserTable: FC = () => {
  const classes = useUserTableStyles();
  const [usersData, setUsersData] = useState<any[]>([]);

  useEffect(() => {
    getFirstHundredUsers().then((result) =>
      setUsersData(result.map((resItem) => resItem.data.data).flat())
    );
  }, []);

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
                    <EmailPopup id={user.id} email={user.email} />
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
