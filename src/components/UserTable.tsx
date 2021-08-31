import React, { FC, useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { EmailPopup } from "./EmailPopup";
import { Loader } from "./Loader";
import { User } from "../interfaces/User";
import { useUserTableStyles } from "../styles/UserTableStyles";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { getUsers } from "../utils/getUsers";

let currentPageValue = 1;

export const UserTable: FC = () => {
  const classes = useUserTableStyles();
  const [usersData, setUsersData] = useState<any[]>([]);

  const getNextUsersData = () => {
    getUsers(currentPageValue++).then((result) =>
      setUsersData((prevState) => prevState.concat(result.data.data))
    );
  };

  const getFirstHundredUsersData = () => {
    Promise.all([
      getUsers(currentPageValue++),
      getUsers(currentPageValue++),
      getUsers(currentPageValue++),
      getUsers(currentPageValue++),
      getUsers(currentPageValue++),
    ]).then((result) =>
      setUsersData(result.map((resItem) => resItem.data.data).flat())
    );
  }

  useEffect(() => {
    getFirstHundredUsersData()
  }, []);

  return (
    <React.Fragment>
      {usersData.length ? (
        <BottomScrollListener onBottom={getNextUsersData}>
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
        </BottomScrollListener>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};
