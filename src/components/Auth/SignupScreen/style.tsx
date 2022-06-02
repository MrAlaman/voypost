import { makeStyles } from '@mui/styles';
import homeImage from '../../../assets/images/Hero-image.png';

const useStyles = makeStyles({
  box__image: {
    background: `url(${homeImage})`,
    height: '100vh',
    width: '100%',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box__login: {
    fontWeight: 'bold',
    height: '113px',
    marginTop: '45px',
  },
  box__input: {
    position: 'relative',
    width: 375,
    height: 100,
  },
  box__button: {
    width: 375,
    height: 45,
    backgroundColor: '#F50057',
    '&:hover': {
      backgroundColor: '#F50057',
    },
  },
  box__eye: {
    cursor: 'pointer',
  },
  login: {
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: '200px',
  },
  login__text: {
    FontWeight: '800px',
    fontSize: '14px',
    letterSpacing: '-1.5px',
  },
  login__button: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#f50057',
  },
});

export default useStyles;
