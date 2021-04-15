import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    height: "3rem",
  },

  heading: {
    color: "rgba(0,183,255, 1)",
    paddingLeft: "16px",
  },
}));
