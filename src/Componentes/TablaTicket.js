import React from "react";
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
    minWidth: 275
  }
}));

const row = (x, i, header) => (
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) => (
      <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
    ))}
  </TableRow>
);

export default function TablaTicket({ data, header }) {
  const classes = useStyles();

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
