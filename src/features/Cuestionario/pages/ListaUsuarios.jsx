
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ListaUsuarios() {
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Codigo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell align="right">Juan</TableCell>
            <TableCell align="right">25</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell align="right">María</TableCell>
            <TableCell align="right">30</TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default ListaUsuarios;
