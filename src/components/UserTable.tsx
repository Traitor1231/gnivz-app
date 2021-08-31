import { FC, useState, useEffect } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from '@material-ui/core/styles';
import Paper  from '@material-ui/core/Paper';
import axios from "axios";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
}))(TableCell);


export const UserTable: FC = () => {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {

    axios.get(
      `https://gorest.co.in/public-api/users`
    ).then((result)=>setUsersData(result.data.data))
  }, []);

  interface User {
    id: number;
    name: string;
    email: string;
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <CustomTableCell>Имя</CustomTableCell>
            <CustomTableCell>Электронная почта</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((user: User) => (
            <TableRow key={user.id}>
              <CustomTableCell>{user.name}</CustomTableCell>
              <CustomTableCell>{user.email}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};