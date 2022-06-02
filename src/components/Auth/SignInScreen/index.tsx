import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Box, Typography, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SignupSchema from '../../Unknown/Schemas/signupSchema';
import logo from '../../../assets/icons/logo.svg';
import { UIContext } from '../../Unknown/UIContext';
import useStyles from './style';

interface MyFormValues {
  email: string;
  password: string;
}

const SignInScreen: React.FC = () => {
  const classes = useStyles();
  const [showPass, setShowPass] = useState(true);
  const { setAlert } = useContext(UIContext);

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };
  // eslint-disable-next-line
  async function handleSignIn(values: MyFormValues, actions: any) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
      await actions.setSubmitting(false); // eslint-disable-next-line
    } catch (error: any) {
      actions.setSubmitting(false);
      const errorMessage: string = error.message;
      setAlert({
        show: true,
        severity: 'error',
        message: errorMessage,
      });
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: handleSignIn,
    validationSchema: SignupSchema,
  });

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box className={classes.box__image} />
        </Grid>
        <Grid container item xs={6} justifyContent="center">
          <Box className={classes.box}>
            <img src={logo} alt="logo" />
            <Typography className={classes.box__login} variant="h4">
              Login
            </Typography>
            <form>
              <Box className={classes.box__input}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="filled"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  helperText={formik.touched.email && formik.errors.email}
                  error={formik.touched.email && !!formik.errors.email}
                  onBlur={formik.handleBlur}
                />
              </Box>
              <Box className={classes.box__input}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="filled"
                  type={showPass ? 'password' : 'text'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                  helperText={formik.touched.password && formik.errors.password}
                  error={formik.touched.password && !!formik.errors.password}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <VisibilityIcon
                          onClick={() => setShowPass((prev) => !prev)}
                          className={classes.box__eye}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                fullWidth
                className={classes.box__button}
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                Login
              </Button>
            </form>
            <Box className={classes.register}>
              <Box className={classes.register__text}>
                Don’t have an account?
              </Box>
              <Link to="/register" className={classes.register__button}>
                Register
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInScreen;
