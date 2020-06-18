import React, {useEffect , useState} from 'react';
import {useHistory , useLocation} from 'react-router-dom';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import api from '../../services/api';

interface Log {
    id: number;
    level: string;
    description: string;
    detail: string;
    origin: string;
    quantity: number;
    createdAt: string;
}

interface LogState {
    id: string;
}

const LogDetail = () => {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation<LogState>().state;

    const [items, setItems] = useState<Log>({
        id: 0,
        level: '',
        description: '',
        detail: '',
        origin: '',
        quantity: 0,
        createdAt: ''
    });

    const handleGoBack = () => {
        history.push('/logs')
    }

    useEffect(() => {
        
        const logstate: LogState = {
            id: location.id
        };

        api.get('logs/' + logstate.id).then(response => {
          setItems(response.data);
        }).catch(function (error) {
          history.push('/')
        })
    
    },[history, location]);

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

        <Container maxWidth="lg" className={classes.container}>

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField 
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="id"
                        type="number"
                        value={String(items.id)}
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>
                
                <Grid item xs={3}>
                    <TextField 
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="quantity"
                        type="number"
                        value={String(items.quantity)}
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="origin"
                        value={items.origin}
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>
                
                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        label="description"
                        value={items.description}
                        inputProps={{ 'aria-label': 'description' }} 
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        multiline
                        rows={5}
                        rowsMax={10}
                        variant="outlined"
                        margin="normal"
                        label="detail"
                        value={items.detail}
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
            marginTop: 50,
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