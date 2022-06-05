import { React, Fragment } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "yup-phone";
import "react-phone-input-2/lib/material.css";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export const renderInput = ({ field, form, ...props }) => {
  return (
    <Fragment>
      <TextField {...field} {...props} fullWidth />
    </Fragment>
  );
};

export const renderTime = ({ field, form, ...props }) => {
  let interval = 15;
  let timesList = [];
  let startTime = 9 * 60;
  let ap = ["AM", "PM"];

  for (var i = 0; startTime < 23 * 60; i++) {
    var hh = Math.floor(startTime / 60);
    var mm = startTime % 60;
    timesList[i] =
      ("0" + (hh % 12)).slice(-2) +
      ":" +
      ("0" + mm).slice(-2) +
      ap[Math.floor(hh / 12)];
    startTime = startTime + interval;
  }

  return (
    <Fragment>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        variant="outlined"
        value={field.value}
        className={props.className}
        onChange={(event) => {
          form.setFieldValue(field.name, event.target.value);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {timesList.map((item, key) => (
          <MenuItem key={key} value={item}>
            <em>{item}</em>
          </MenuItem>
        ))}
      </Select>
    </Fragment>
  );
};

export const renderDate = ({ field, form, ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        value={field.value}
        disablePast
        onChange={(newValue) => form.setFieldValue(field.name, newValue)}
        renderInput={(props) => <TextField fullWidth {...props} />}
      />
    </LocalizationProvider>
  );
};

export const renderPhone = ({ field, form, ...props }) => {
  return (
    <Fragment>
      <PhoneInput
        country={"ae"}
        variant="outlined"
        enableAreaCodes={true}
        prefix={"+"}
        onChange={(value) => {
          form.setFieldValue(field.name, `+${value}`);
        }}
        value={field.value}
        placeholder={field.name}
        specialLabel=""
        containerClass={`${props.className} ${field.name}`}
        fullWidth
      />
    </Fragment>
  );
};

export const renderSelect = ({ field, form, ...props }) => {
  // console.log(props, field, form);

  return (
    <Fragment>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        variant="outlined"
        value={field.value}
        className={props.className}
        onChange={(event) => {
          form.setFieldValue(field.name, event.target.value);
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"suits"}>Suits</MenuItem>
        <MenuItem value={"blazers"}>Blazers</MenuItem>
        <MenuItem value={"pants"}>Pants</MenuItem>
        <MenuItem value={"shirts"}>Shirts</MenuItem>
        <MenuItem value={"bow-ties"}>Bow-Ties</MenuItem>
        <MenuItem value={"vests"}>Vests</MenuItem>
      </Select>
    </Fragment>
  );
};
