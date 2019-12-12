export default {
  palette: {
    primary: {
      main: "#00897b"
    },
    secondary: {
      main: "#00acc1"
    }
  },
  typography: {
    useNextVariants: true
  },

  // separat de pallette un obiect nou cu toate celelalte elemente de styling
  spreadThis: {
    form: {
      textAlign: "center"
    },
    image: {
      width: "100px",
      margin: "20px auto 20px auto"
    },
    textField: {
      marginTop: "10px"
    },
    submitButton: {
      marginTop: "30px",
      marginBottom: "1em",
      position: "relative"
    },
    customError: {
      color: "red",
      fontSize: "1rem",
      marginTop: "1em"
    },
    progress: {
      position: "absolute"
    },
    invisibleSeparator: {
      border: "none",
      margin: 4
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marignBottom: 20
    },
    paper: {
      padding: 20
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%"
        }
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%"
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle"
        },
        "& a": {
          color: "#00bcd4"
        }
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0"
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer"
        }
      }
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px"
      }
    }
  }
};
