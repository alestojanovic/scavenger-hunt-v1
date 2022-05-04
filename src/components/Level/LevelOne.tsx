import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes, featFlags } from "../../flags";
import { LevelOneMessages, PromptMessages } from "../../Messages";

const styles = StyleSheet.create({
  unlockButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "3px",

    ":hover": {
      background: "linear-gradient(#272727, #333)",
    },

    "::selection": { background: "transparent" },
  },
  redButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      zIndex: 1,
      background: "linear-gradient(#333, #ff0000)",
      borderColor: "#fb5d5d",
      borderRadius: "9px",
      backgroundColor: "white",
      boxShadow: "5px 10px 18px red",
      outline: "none",
    },
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
      zIndex: 1,
      background: "linear-gradient(#333, #98fe00)",
      borderColor: "#cbf094",
      borderRadius: "9px",
      backgroundColor: "white",
      boxShadow: "5px 10px 18px #cbf094",
      outline: "none",
    },
  },
});

export const LevelOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <button
        className={css(styles.unlockButton)}
        onClick={handleUnlockNavigation}
      >
        {LevelOneMessages.UNLOCK}
      </button>
      {featFlags.test && <h3>{LevelOneMessages.HINT} </h3>}
      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelOneMessages.CONTINUE}
      </button>
    </div>
  );
};
