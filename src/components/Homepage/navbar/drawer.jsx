import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton } from "@material-ui/core";

import ExpentionpanelDrawerMenu2 from "./expentiondrawermenu2";
import Logo from '../../util/logo'
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
      <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex" }}>
        <div style={{
          marginTop:'.5rem',
          marginLeft:'1.2rem',
          marginRight:'.7rem'
          }}>
          <IconButton
            aria-label="close"
              onClick={toggleDrawer("top", false)}
              style={{outline:'none' , color:'black'}}
          >
            <CloseIcon />
          </IconButton>
          </div>
          <div style={{marginTop:'1rem'}}>
          <Logo />
          </div>
        </div>

        <ExpentionpanelDrawerMenu2 />
      </div>
    </div>
  );

  function Checkingwidth() {
    return (
      <IconButton onClick={toggleDrawer("top", true)} style={{outline:'none' , color:'black'}}>
      <MenuIcon
      />
      </IconButton>
    );
  }

  return (
    <div>
      <Checkingwidth />
      <Drawer
        style={{backgroundColor:'white'}}
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        {fullList("top")}
      </Drawer>
    </div>
  );
}
