import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 200 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(0),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  // {
  //   value: 0,
  //   label: '0',
  // },
  // {
  //   value: 5,
  //   // label: '5k',
  // },
  // {
  //   value: 10,
  //   // label: '10k',
  // },
  // {
  //   value: 20,
  //   label: '20k',
  // },
  // {
  //   value: 50,
  //   label: '50k',
  // },
  {
    value: 100,
    label: '100k',
  },
];

const IOSSlider = withStyles({
  root: {
    color: 'blue', //#3880ff
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 16,
    width: 16,
    border: '5px solid blue',
    // borderradius: '5px',
    // borderColor: 'white',
    backgroundColor: 'white',
    boxShadow: iOSBoxShadow,
    marginTop: -5,
    marginLeft: -4,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-90% - 8px)', //calc(-50% + 12px)
    top: -33,
    '&.*': {
      background: 'transparent', // transparent
      color: '#000', //#000
    },
  },
  track: {
    height: 6,
    borderRadius: '16px 16px 16px 16px',
  },
  rail: {
    height: 6,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
    borderRadius: '16px 0 0 16px',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 12,
    width: 4,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

// const PrettoSlider = styled(Slider)({
//   color: '#52af77',
//   height: 8,
//   '& .MuiSlider-track': {
//     border: 'none',
//   },
//   '& .MuiSlider-thumb': {
//     height: 24,
//     width: 24,
//     backgroundColor: '#fff',
//     border: '8px solid currentColor',
//     '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
//       boxShadow: 'inherit',
//     },
//     '&:before': {
//       display: 'none',
//     },
//   },
//   '& .MuiSlider-valueLabel': {
//     lineHeight: 1.2,
//     fontSize: 12,
//     background: 'unset',
//     padding: 0,
//     width: 32,
//     height: 32,
//     borderRadius: '50% 50% 50% 0',
//     backgroundColor: '#52af77',
//     transformOrigin: 'bottom left',
//     transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
//     '&:before': { display: 'none' },
//     '&.MuiSlider-valueLabelOpen': {
//       transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
//     },
//     '& > *': {
//       transform: 'rotate(0deg)',
//     },
//   },
// });



export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className=''> {/**{classes.root}+ */}
      <div gutterBottom className='text-left text-[#70798f] font-semibold my-2'>Budget</div>
      <IOSSlider aria-label="ios slider" defaultValue={25} marks={marks} valueLabelDisplay="on" className='-mt-2 ml-2' />
      {/* <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      /> */}
      {/* <div className={classes.margin} /> */}
      
    </div>
  );
}
