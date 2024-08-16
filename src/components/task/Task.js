import { Box, Modal } from "@mui/material";
import React from "react";
import { boxStyle } from "../../theme";

function Task({ open, close }) {
  return (
    <Modal open={open} onClose={close} closeAfterTransition>
      <Box sx={boxStyle}></Box>
    </Modal>
  );
}

export default Task;
