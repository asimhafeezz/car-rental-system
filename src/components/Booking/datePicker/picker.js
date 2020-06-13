import React from "react";
import { TextField } from "@material-ui/core";
import { DateRangePicker, DateRangeDelimiter , MobileTimePicker} from "@material-ui/pickers";
// pick a date util library

export default () => {
    const [selectedDate, handleDateChange] = React.useState([null, null]);
    const [selectedDate1, handleDateChange1] = React.useState(new Date("2018-01-01T00:00:00.000Z"));
    return (
      <div style={{display:'flex' , justifyContent:"center" , marginLeft:'20rem'}}>
    <DateRangePicker
      startText="PickUp Date"
      endText="Return Date"
      disablePast
      value={selectedDate}
      onChange={date => handleDateChange(date)}
      renderInput={(startProps, endProps) => (
        <>
          <TextField variant="standard" {...startProps} />
          <DateRangeDelimiter>
          <MobileTimePicker
        renderInput={props => <TextField variant="outlined" {...props} />}
        ampm
        ampmInClock
        // disableOpenPicker
        // showToolbar={false}
        disableMaskedInput
        // autoOk
        showTodayButton
        todayText="now"
        label="PickUp Date"
        value={selectedDate1}
        onChange={handleDateChange1}
      />
          </DateRangeDelimiter>
          <TextField {...endProps} />
        </>
      )}
    />
    {/* <TimePicker
        renderInput={props => <TextField variant="outlined" {...props} />}
        // ampm
        // ampmInClock
        // showTodayButton
        // todayText="now"
        // OpenPickerButtonProps
        // DialogProps
        ampmInClock
        autoOk
        // disableOpenPicker
        // allowKeyboardControl
        OpenPickerButtonProps
        clearable
        label="Return Time"
        value={selectedDate1}
        onChange={handleDateChange1}
      /> */}
    </div>
  );
};
