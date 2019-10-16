import React, { useState, useEffect }  from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    backgroundColor: "#fafafa"
  }
}));

const row = (x, i, header) => (
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) => (
      <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
    ))}
  </TableRow>
);

export default function TablaTicket({ header }) {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/ticket")
      .then(({ data }) => {
        setData(data);
        console.log(data);
      });
  }, []);


  return (
    <Card className={classes.card}>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {header.map((x, i) => (
                <TableHeaderColumn key={`thc-${i}`}>{x.name}</TableHeaderColumn>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>{data.map((x, i) => row(x, i, header))}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
