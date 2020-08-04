import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';

import {IconButton} from '@material-ui/core'

import Form from './form'

export default function ResponsiveDialog({ open, setOpen , setIsEmailSent }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    
     //css
  let compStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };
    


  return (
    <div>
      <Button style={{outline:'none'}} className="mt-4 mb-4" variant="contained" color="primary" size="large" onClick={handleClickOpen}>
        Be a Host
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{backgroundColor:'#fd7014'}}><div style={compStyle}><h4 style={{marginTop:'.7rem'}}>Be a Host</h4><div><IconButton onClick={handleClose} style={{outline:'none'}}><CloseIcon /></IconButton></div></div></DialogTitle>
        <DialogContent>
            <Form handleClickOpen={handleClickOpen} handleClose={handleClose} setIsEmailSent={setIsEmailSent} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
