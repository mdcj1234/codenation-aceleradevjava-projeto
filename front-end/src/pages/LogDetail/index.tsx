import React from 'react';
import {useHistory} from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField 
                        fullWidth
                        disabled
                        variant="outlined"
                        margin="normal"
                        placeholder="id"
                        name="id"
                        type="number"
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>
                
                <Grid item xs={3}>
                    <TextField 
                        fullWidth
                        disabled
                        variant="outlined"
                        margin="normal"
                        placeholder="quantity" 
                        name="quantity"
                        type="number"
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth
                        disabled
                        variant="outlined"
                        margin="normal"
                        placeholder="origin" 
                        name="origin"
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        disabled
                        variant="outlined"
                        margin="normal"
                        placeholder="description" 
                        name="description"
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        disabled
                        multiline
                        rows={5}
                        rowsMax={10}
                        variant="outlined"
                        margin="normal"
                        placeholder="details" 
                        name="details"
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>
            </Grid>
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