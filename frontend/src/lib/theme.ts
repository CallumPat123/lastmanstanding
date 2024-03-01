import { createTheme } from "@mui/material/styles";

// https://bareynol.github.io/mui-theme-creator/

export const red = "rgb(209, 64, 70)";
// const peach = 'rgb(233, 96, 102)'
// const orange = "rgb(227, 127, 59)"
const purple = "#a818f3";
const fullBlack = "rgba(0,0,0,1)";
// const transparentBlack = "rgba(0,0,0,0.8)"

const darkThemeBlack = fullBlack;

export const basecolor = red;
const darkBaseColor = red;

// const blue = 'rgb(118, 168, 223)'
const secondarycolor = purple;
const darksecondarycolor = purple;

const blackBorder = "1px solid #222";

const fontFamily = [
  "Cabin",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const lightColorTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: darkBaseColor,
    },
    secondary: {
      main: secondarycolor,
    },
  },
});

export const lightTheme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    mode: "light",
    primary: {
      main: darkBaseColor,
    },
    secondary: {
      main: secondarycolor,
    },
  },
  typography: {
    fontFamily,
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "black",
          borderRadius: 5,
          margin: "0px",
        },
        arrow: {
          color: "black",
        },
      },
      defaultProps: {
        arrow: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "rounded", color: "primary", size: "small" },
          style: {
            borderRadius: "16px", // Set the edge to be rounded
            textTransform: "none",
            // Add other styles as needed

            backgroundColor: darkBaseColor, // Example primary color
            color: "white",
            "&:hover": {
              backgroundColor: darkBaseColor, // Darken when hovering
            },

            padding: "2px 6px", // Adjust padding for small size
            fontSize: "0.8125rem", // Adjust font size for small size
          },
        },
        {
          props: { variant: "extrasmall", color: "primary", size: "small" },

          style: {
            // backgroundColor: darkBaseColor, // Example primary color
            // color: "white",
            // "&:hover": {
            //   backgroundColor: darkBaseColor, // Darken when hovering
            // },

            padding: "8px", // Adjust padding for small size
            fontSize: "0.8125rem", // Adjust font size for small size
            minWidth: "auto",
            // Some CSS
            color: lightColorTheme.palette.text.disabled, // Here you can put the color you want for the disabled state
            "&.Mui-disabled": {
              color: "black", // Here you can put the color you want for the disabled state
            },
          },
        },
      ],
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: "1px solid #ccc",
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          marginTop: "0px",
        },
      },

      variants: [
        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            borderColor: lightColorTheme.palette.action.disabled,
          },
        },
      ],
    },
  },
});

const darkColorTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: basecolor,
    },
  },
});

export const darkTheme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    mode: "dark",
    primary: {
      main: basecolor,
    },
    secondary: {
      main: darksecondarycolor,
    },
  },
  typography: {
    fontFamily,
  },

  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        root: {
          border: blackBorder,
          backgroundColor: fullBlack,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: blackBorder,
          backgroundColor: darkThemeBlack,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "black",
          borderRadius: 5,
          margin: "0px",
        },
        arrow: {
          color: "black",
        },
      },
      defaultProps: {
        arrow: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0,0,0,0.1)",
        },
        input: {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: blackBorder,
          borderLeft: "none",
          borderTop: "none",
          borderRight: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          border: "none",
          // backgroundColor: darkThemeBlack,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: blackBorder,
          borderLeft: "none",
          borderTop: "none",
          borderBottom: "none",
          backgroundColor: darkThemeBlack,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        subheader: {
          backgroundColor: darkThemeBlack,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "rounded", color: "primary", size: "small" },
          style: {
            borderRadius: "16px", // Set the edge to be rounded
            textTransform: "none",
            // Add other styles as needed

            backgroundColor: darkBaseColor, // Example primary color
            color: "white",
            "&:hover": {
              backgroundColor: darkBaseColor, // Darken when hovering
            },

            padding: "2px 6px", // Adjust padding for small size
            fontSize: "0.8125rem", // Adjust font size for small size
          },
        },
        {
          props: { variant: "extrasmall", color: "primary", size: "small" },

          style: {
            // backgroundColor: darkBaseColor, // Example primary color
            // color: "white",
            // "&:hover": {
            //   backgroundColor: darkBaseColor, // Darken when hovering
            // },

            padding: "8px", // Adjust padding for small size
            fontSize: "0.8125rem", // Adjust font size for small size
            minWidth: "auto",
            // Some CSS
            color: darkColorTheme.palette.text.disabled, // Here you can put the color you want for the disabled state
            "&.Mui-disabled": {
              color: "white", // Here you can put the color you want for the disabled state
            },
          },
        },
      ],
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: darkThemeBlack,
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: black,
    //     },
    //   },
    // },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: darkThemeBlack,
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: blackBorder,
          backgroundColor: fullBlack,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: "white",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          marginTop: "0px",
        },
      },

      variants: [
        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            borderColor: darkColorTheme.palette.action.disabled,
          },
        },
      ],
    },
  },
});

export default lightTheme;

export const globalStyles = {
  ".MuiButtonBase-root": {
    whiteSpace: "nowrap",
  },
  ".MuiAlert-root": {
    alignItems: "center",
  },
  // ".MuiTooltip-arrow": {
  //   backgroundColor: "black",
  // },
};
