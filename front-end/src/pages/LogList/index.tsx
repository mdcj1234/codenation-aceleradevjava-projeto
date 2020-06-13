import React , { useState , useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import api from '../../services/api';
import './styles.css'

interface Column {
  id: 'id' | 'level' | 'description' | 'origin' | 'quantity' | 'createdAt';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { 
    id: 'level', 
    label: 'Level', 
    minWidth: 100 
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 200,
  },
  {
    id: 'origin',
    label: 'Origin',
    minWidth: 100,
  },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 50,
    format: (value: number) => value.toFixed(0),
  },
  {
    id: 'createdAt',
    label: 'CreatedAt',
    minWidth: 150,
  },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        container: {
            marginTop: 20,
            height: '100%',
        },

        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: '#FFF'
        },
    })
);

interface Log {
    id: number;
    level: string;
    description: string;
    origin: string;
    quantity: number;
    createdAt: string;
  }

const LogList = () => {
  const classes = useStyles();
  const history = useHistory();

  const [items, setItems] = useState<Log[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    api.get('logs', {
      params: {
        page: page,
        size: rowsPerPage
      }
    }).then(response => {
      console.log(response.data)
      setItems(response.data.content);
      setTotalItems(response.data.totalElements)
    }).catch(function (error) {
      history.push('/')
    })

  },[page,rowsPerPage,history]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Central de Erros
            </Typography>
            <Button color="inherit">Logout</Button>
        </Toolbar>
    </AppBar>

    <Container maxWidth="lg">
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={item.id}>
                  {columns.map((column) => {
                    const value = item[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
    </>
  );
}

export default LogList;