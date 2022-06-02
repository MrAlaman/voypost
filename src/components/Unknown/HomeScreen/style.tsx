import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  home: {
    position: 'fixed',
    backgroundColor: '#f50057',
    height: '60px',
    zIndex: '2',
    top: '0',
  },
  home__logo: {
    FontWeight: '500',
    fontSize: '25px',
    lineHeight: '180%',
    letterSpacing: '0.15px',
  },
  home__wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  home__avatar: {
    marginRight: '20px',
    cursor: 'pointer',
  },
  home__item: { display: 'flex' },
  home__logout: {
    backgroundColor: '#fff',
    cursor: 'pointer',
    position: 'absolute',
    width: '94px',
    height: '50px',
    right: '15px',
    top: '60px',
    boxShadow:
      '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  home__explore: {
    marginTop: '46px',
    display: 'flex',
    justifyContent: 'center',
  },
  home__buttonExplore: {
    marginTop: '80px',
    backgroundColor: '#F50057',
    FontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#F50057',
    },
  },
});

export default useStyles;
