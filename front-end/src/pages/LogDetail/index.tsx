import React  from 'react';
import {useHistory} from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const LogDetail = () => {

    const classes = useStyles();
    const history = useHistory();

    const handleGoBack = () => {

        history.push('/logs')
      }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Central de Erros
                </Typography>
                <Button color="inherit" onClick={handleGoBack}>Voltar</Button>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg">

            <form className={classes.form} noValidate autoComplete="off">

                <TextField 
                margin="normal"
                placeholder="id"
                name="id"
                type="number"
                inputProps={{ 'aria-label': 'description' }} 
                />

                <TextField 
                margin="normal"
                placeholder="description" 
                name="description"
                inputProps={{ 'aria-label': 'description' }} 
                />

                <TextField 
                margin="normal"
                placeholder="origin" 
                name="origin"
                inputProps={{ 'aria-label': 'description' }} 
                />

                <TextField 
                margin="normal"
                placeholder="quantity" 
                name="quantity"
                type="number"
                inputProps={{ 'aria-label': 'description' }} 
                />
            </form>

        </Container>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          marginTop: 20,
          width: '100%',
        }, 

        form: {
          marginTop: 20,
          '& > *': {
            margin: theme.spacing(1),
          },
        },

        select: {
          minWidth: 150,
          margin: theme.spacing(1),
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

export default LogDetail;