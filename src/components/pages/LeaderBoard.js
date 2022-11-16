




import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { textAlign } from '@mui/system';


const Leaderboard = () => {

  
  function createData(name, score) {
    return { name, score};
  }

  const rows = [
    createData('MarkKnopfler', 159),
    createData('DavidGilmour', 237),
    createData('Laren', 262),
    createData('Banana', 305),
    createData('Gingerbread', 356),
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Left',
        alignItems: 'Right',
        height: '80vh',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '2vh'
      }}
    >
      <h1>LEADERBOARD</h1>
      <TableContainer component={Paper} sx={{ minWidth: 200, maxWidth: '80vw', marginLeft: 'auto', marginRight: 'auto' }}>
        <Table sx={{ minWidth: 200, maxWidth: '80vw' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>Username</b></TableCell>
              <TableCell style={{textAlign: 'right'}}><b>Score</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    </div>
  );
};
  
export default Leaderboard;