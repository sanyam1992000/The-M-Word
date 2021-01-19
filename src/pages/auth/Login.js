import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: "#000000",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "test@test.com",
    password: "test",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, didRedirect } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues({ ...values, error: false, loading: true });
    // signin({ email, password })
    //   .then((data) => {
    //     if (data.error) {
    //       setValues({ ...values, error: data.error, loading: false });
    //     } else {
    //       authenticate(data, () => {
    //         setValues({
    //           ...values,
    //           didRedirect: true,
    //         });
    //       });
    //     }
    //   })
    //   .catch(console.log("signin request failed"));
    setValues({ ...values, didRedirect: true });
  };

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/admin" />;
    }
    // if (isAutheticated()) {
    //   return <Redirect to="/" />;
    // }
  };

  const loginForm = () => (
    <>
      <Avatar className={classes.avatar} src="/images/manan.png" />
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange("email")}
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
              onChange={handleChange("password")}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onSubmit}
        >
          Sign In
        </Button>
      </form>
    </>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {loginForm()}
        {performRedirect()}
      </div>
    </Container>
  );
}
