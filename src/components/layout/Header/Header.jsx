// src/components/Header.jsx

import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "45px",
        left: 0,
        top: 2,
        backgroundColor: "#1B365E",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
          gap: "8px",
          position: "absolute",
          width: "424px",
          height: "20px",
          left: "calc(50% - 424px/2 - 5px)",
          top: "8px",
        }}
      >
        <Typography
          sx={{
            width: "256px",
            height: "20px",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            textAlign: "center",
            letterSpacing: "0.02em",
            color: "#D9D9D9",
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
        >
          Vous avez une question ? (de 8h à 18h) :
        </Typography>

        <Box
          sx={{
            width: "20px",
            height: "20px",
            flex: "none",
            order: 1,
            flexGrow: 0,
            position: "relative",
          }}
        >
          {/* <PhoneIcon
            sx={{
              width: '20px',
              height: '20px',
              color: '#FFFFFF',
            }}
          /> */}
          <img
            src="/assets/icons/icon-phone.svg"
            alt=""
            aria-hidden="true"
            className="phone-icon"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Typography
          sx={{
            width: "132px",
            height: "18px",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "18px",
            textAlign: "center",
            letterSpacing: "0.02em",
            color: "#FFFFFF",
            flex: "none",
            order: 2,
            flexGrow: 0,
          }}
        >
          + 33 6 00 00 00 00
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
