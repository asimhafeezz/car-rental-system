import React from "react";
import { IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";



//icons
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CloseIcon from "@material-ui/icons/Close";


export default function ResponsiveDialog({ isEmailSent , setIsEmailSent }) {

    
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

//   const handleClickOpen = () => {
//     // utilStore.handleOpen()
//     setIsEmailSent(true);
//   };

  const handleClose = () => {
    setIsEmailSent(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        style={{ height: "100%" }}
        open={isEmailSent}
        onClose={handleClose}
        aria-labelledby="new-forget"
      >
        <DialogTitle id="new-forget">
          <IconButton onClick={handleClose}>
            <CloseIcon style={{fontSize:'2.5rem' , outline:'none'}} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
                          justifyContent: "center",
                          padding:"0rem 3rem 4rem 3rem"
            }}
                  >
                      <div style={{display:'flex' , justifyContent:'center'}}>
            <EmailOutlinedIcon style={{ height: "7.4rem", width: "7.4rem" , color:'#fd7014'}} /><DoneAllIcon fontSize="large" style={{color:'#fd7014'}} />
            </div>
            <h3 className="mt-5 font-weight-bold">THANK YOU FOR CONTACTING US</h3>
            <h6 className="mt-3 mb-3">
              We will get back to you soon through your email.
            </h6>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
