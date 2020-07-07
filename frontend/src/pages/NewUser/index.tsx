import React, {useState, FormEvent, ChangeEvent} from 'react';
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
import Snackbar from '@material-ui/core/Snackbar'

import api from '../../services/api';
import './styles.css'

const NewUser = () => {

  const classes = useStyles();

  const history = useHistory();

  function handleInputChange(event:ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const [validCreate, setValidCreate] = useState(false)
  const [validData, setValidData] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  function handleLogin() {
    history.push('/')
  }

  function handleClose() {
    setValidCreate(false);
  }

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();

    const {name, email, password} = formData;

    const data = {
      name: name,
      email: email,
      password: password
    }
    
    await api.post('users',data)
    .then((response) => {
      if (response.status === 201) {
        setValidCreate(true);
        history.push('/')
      }
    }).catch(function (error) {
      setValidData(false);
      return;
    })
  }

  return (
    <Container component="main" maxWidth="xs">

      <Snackbar open={validCreate} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>

      <Alert 
        variant="filled" 
        severity="error"
        hidden={validData}
      > 
        Preencha todos os campos.
      </Alert>

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Novo Usuário
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Full Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={handleLogin}>
                Ja tem uma conta? Faça Login!
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default NewUser;