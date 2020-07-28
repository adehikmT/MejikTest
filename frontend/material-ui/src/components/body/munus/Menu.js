import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles({
  root: {
    width: 430,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Drink"
        icon={<FreeBreakfastIcon fontSize="large" />}
      />
      <BottomNavigationAction
        label="Fast Food"
        icon={<FastfoodIcon fontSize="large" />}
      />
    </BottomNavigation>
    {/* <Typography>Drink Menu</Typography> */}
    </>
  );
}
