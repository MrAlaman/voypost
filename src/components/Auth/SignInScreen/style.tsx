import { makeStyles } from '@mui/styles';
import authImage from '../../../assets/images/Hero-image.png';

const useStyles = makeStyles({
  box__image: {
    background: `url(${authImage})`,
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
    height: '15vh',
    marginTop: '9vh',
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
  register: {
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginTop: '5vh',
  },
  register__text: {
    FontWeight: '600px',
    fontSize: '14px',
  },
  register__button: {
    textDecoration: 'none',
    color: '#f50057',
  },
});

export default useStyles;
