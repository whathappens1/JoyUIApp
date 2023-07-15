/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./styles/header.css";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/joy";

function header({ setMode, mode }) {
  const { i18n } = useTranslation();

  return (
    <div style={{marginBottom: "1vh", textAlign: "center"}}>
      <Button
        variant="soft"
        color="primary"
        sx={{ m: "30px 10px" }}
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {i18n.language === "ar" ? "تغيير الوضع" : "Change Mode"}
      </Button>
      <Button
        variant="soft"
        sx={{ m: "30px 10px" }}
        color="primary"
        onClick={() => {
          if (i18n.language === "en") {
            i18n.changeLanguage("ar");
          } else {
            i18n.changeLanguage("en");
          }
        }}
      >
        {i18n.language === "ar" ? "تغيير اللغة" : "Change Language"}
      </Button>

    </div>
  );
}

export default header;
