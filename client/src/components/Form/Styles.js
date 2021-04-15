import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    border: "solid grey 0.5px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "60px",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    border: "none",
    padding: "5px",
  },
  textInput: {
    marginTop: "8px",
  },
  buttonSubmit: {
    marginTop: "8px",
    background: "rgba(0,183,255, 1)",
  },
  buttonClear: {
    marginTop: "8px",
    // background: "rgba(0,183,255, 1)",
  },
}));
