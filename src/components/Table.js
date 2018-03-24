import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const row = (x, i, header) => (
  <TableRow key = {i}>
    {
      header.map((y, k) => //y is the header
        <TableRowColumn key={`trc-${k}`}>
          {x[y.prop]}
        </TableRowColumn>
      )}
  </TableRow>

)

export default  ({data, header}) =>
  <Table>
    <TableHeader>
      <TableRow>
        {
          header.map((x, i) =>
            <TableHeaderColumn key={i}>{x.name}</TableHeaderColumn>)
        }

      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header))}

      {/* <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
        </TableRow>
        <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        </TableRow>
        <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow> */}
    </TableBody>
  </Table>