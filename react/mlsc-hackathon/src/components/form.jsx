import * as React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./button.css"
export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
  });
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="on"
      onSubmit={formik.handleSubmit}
      className="formContainer"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        id="email"
        name="email"
        required
        label="Email"
        variant="standard"
      />
      
      <button className="button" type="submit">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">Submit</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </button>
    </Box>
  );
}
