import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'or create account using social media'}

    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#189AB4",
    opacity:0.85,

    color:"#fff",
    borderRadius: "50px",
    '&:hover': {
  backgroundColor:"#189AB4",
  opacity:1,
    color: '#FFF'
}

  },
}));

function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>

          <form className={classes.form} noValidate>
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
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              color="textSecondary"
              variant="body2"
            />
            <br></br>
            <Button
              type="submit"
              fullWidth
              alignContent="center"

              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          <br></br>
        <Grid container
  direction="row"
  justify="center"
  alignItems="center"
>
          <Grid item xs={4} spacing={5}>
          <Icon className="fab fa-facebook" color="primary" style={{ fontSize: 40 }}/>
          </Grid>
            <Grid item xs={4}>
            <Icon className="fab fa-github"style={{ fontSize: 40 }} />
            </Grid>
              <Grid item xs={4}>
              <Icon className="fab fa-google" style={{ fontSize: 40 }} />
              </Grid>
        </Grid>
        </div>


      </Grid>
      <CssBaseline />

      <Grid item xs={false} sm={6} md={7}  />

    </Grid>
  );
}
export default SignInSide;
