import React, {useState, ChangeEvent, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

import api from '../../services/api';
import './styles.css'

const Login = () => {

  const classes = useStyles();

  const [validLogin, setValidLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const history = useHistory();

  function handleInputChange(event:ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();
    
    const { email, password} = formData;
    
    const token = Buffer.from(`${'codenation'}:${'codenationehfoda'}`, 'utf8').toString('base64')

    const data = new URLSearchParams();
    data.append('client', 'codenation');
    data.append('username', email);
    data.append('password', password);
    data.append('grant_type', 'password');

    const headers = {
      headers: {
        'Authorization': `Basic ${token}`,
      }
    };
    
    await api.post('oauth/token', data , headers)
    .then((response) => {
      if (response.status === 200) {
        api.defaults.headers.common = {'Authorization': `bearer ${response.data.access_token}`}
        history.push('/logs')
      }
    }).catch(function (error) {
      setValidLogin(false);
      return;
    })
  }
    
  return (
    <Container component="main" maxWidth="xs">

      <Alert 
        variant="filled" 
        severity="error"
        hidden={validLogin}
      > 
        Usuário e/ou senha inválidos
      </Alert>
      
      <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Bem-vindo(a) !
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>

          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Clique aqui para criar uma nova conta"}
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default Login;