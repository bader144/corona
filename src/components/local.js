import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import WithMaterialUI from './register';

const useStyles = makeStyles((theme) => ({
  root: {
    /*height: 10,*/
  },
  wrapper: {
    /*width: 600,*/
    marginBottom: 10,
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(5),
    paddingBottom: 10,
  },
  WithMaterialUI: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleSlide() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <FormControlLabel style={{position: 'relative'}}
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <WithMaterialUI/>
          </Paper>
        </Slide>
      </div>
    </div>
  );
}
