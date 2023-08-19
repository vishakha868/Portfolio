import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    margin:0,
    padding:'0.5rem',
    height: '12vh',
    backgroundColor: 'rgb(225, 236, 240)',
    borderColor: '#0063cc',
    color:'rgb(57, 72, 105)',
    width:'8.3rem',
    borderRadius:'10%',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'rgb(57, 72, 105)',
      borderColor: '#0062cc',
      color:'rgb(225, 236, 240)',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgb(57, 72, 105)',
      color:'rgb(225, 236, 240)',
      borderColor: '#005cbf',
    },
    '&:focus': {
      backgroundColor: 'rgb(57, 72, 105)',
      color:'rgb(225, 236, 240)',
    },
  });
  
  export default BootstrapButton;