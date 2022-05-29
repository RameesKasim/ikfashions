import { React, Fragment } from "react";
import { TextField, Select, MenuItem } from "@mui/material";
import { ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "yup-phone";
import "react-phone-input-2/lib/material.css";

export const renderInput = ({ field, form, ...props }) => {
  return (
    <Fragment>
      <TextField
        margin="dense"
        variant="outlined"
        {...field}
        {...props}
        fullWidth
      />
    </Fragment>
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
  return (
    <Fragment>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        variant="outlined"
        {...props}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </Fragment>
  );
};
