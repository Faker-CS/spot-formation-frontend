// src/components/Header.jsx

import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "35px", sm: "45px" },
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
          gap: { xs: "1px", sm: "8px" },
          position: "absolute",
          width: { xs: "390px", sm: "424px" },
          height: { xs: "18px", sm: "20px" },
          left: { xs: "calc(50% - 390px/2)", sm: "calc(50% - 424px/2 - 5px)" },
          top: { xs: "8px", sm: "8px" },
        }}
      >
        <Typography
          sx={{
            width: { xs: "200px", sm: "256px" },
            height: { xs: "18px", sm: "20px" },
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: { xs: "10px", sm: "14px" },
            lineHeight: { xs: "16px", sm: "20px" },
            marginLeft: { xs: "10px", sm: "0px" },
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
            width: { xs: "16px", sm: "20px" },
            height: { xs: "16px", sm: "20px" },
            flex: "none",
            order: 1,
            flexGrow: 0,
            position: "relative",
          }}
        >
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
            width: { xs: "132px", sm: "132px" },
            height: { xs: "18px", sm: "18px" },
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: { xs: "13px", sm: "15px" },
            lineHeight: { xs: "16px", sm: "18px" },
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
