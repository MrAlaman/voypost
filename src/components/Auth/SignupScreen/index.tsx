import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, Typography, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { UIContext } from '../../Unknown/UIContext';
import useStyles from './style';
import logo from '../../../assets/icons/logo.svg';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Required field'),
  fullName: Yup.string()
    .matches(/[A-Z][a-z]+(\s|,)[A-Z][a-z]/, 'Please enter valid name')
    .required('Required field'),
  password: Yup.string()
    .required('Required field')
    .min(6, 'Password should be at least 6 characters'),
});

interface MyFormValues {
  email: string;
  fullName: string;
  password: string;
}

const initialValues: MyFormValues = {
  email: '',
  fullName: '',
  password: '',
};

const SignUpScreen: React.FC = () => {
  const classes = useStyles();
  const [showPass, setShowPass] = useState(true);
  const { setAlert } = useContext(UIContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    onSubmit: handleSignUp, // eslint-disable-line
    validationSchema: SignupSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  function handleSignUp(values: MyFormValues) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        user
          ?.updateProfile({
            displayName: values.fullName,
          })
          .then(() => {
            history.push('/');
            setAlert({
              show: true,
              severity: 'info',
              message: 'Welcome',
            });
          });
      })
      .catch((error) => {
        const errorMessage: string = error.message;
        setAlert({
          show: true,
          severity: 'error',
          message: errorMessage,
        });
      })
      .finally(() => formik.setSubmitting(false));
  }

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
              Register
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
                  label="Full Name"
                  variant="filled"
                  type="text"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  name="fullName"
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  error={formik.touched.fullName && !!formik.errors.fullName}
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
              <Box className="reg-box__input">
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
                  Register
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpScreen;
