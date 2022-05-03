import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { StyleSheet, css } from "aphrodite";
import { useLock } from "../../util/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import {
  LevelTwoMessages,
  PromptMessages,
  TooltipMessages,
} from "../../Messages";

const styles = StyleSheet.create({
  unlockButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    padding: "0px",

    "::selection": { background: "transparent" },
  },

  questionTooltip: {
    backgroundColor: "#61dafb",
    color: "#fff",
    textAlign: "center",
    padding: "8px",
    borderRadius: "6px",

    "::after": {
      content: '" "',
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: " -5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: "#61dafb transparent transparent transparent",
    },
  },
  redButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#ff0000, #333)",
      borderColor: "#ff0000",
    },

    "::selection": { background: "transparent" },
  },

  greenButton: {
    background: "linear-gradient(#98fe00, #333)",
    borderStyle: "solid",
    borderColor: "#adff2f",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#333, #98fe00)",
      borderColor: "#cbf094",
    },

    "::selection": { background: "transparent" },
  },
});

export const LevelTwo = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_THREE}`);
  };

  useLock(`${PromptMessages.DEFAULT}`, unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <Tippy
        className={css(styles.questionTooltip)}
        content={TooltipMessages.LEVEL_TWO_CONGRATS}
      >
        <button
          className={css(styles.unlockButton)}
          onClick={handleUnlockNavigation}
        ></button>
      </Tippy>

      <h3>{LevelTwoMessages.HINT}</h3>

      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelTwoMessages.CONTINUE}
      </button>
    </div>
  );
};