/* eslint-disable no-unused-vars */
import { Box, IconButton, Modal } from "@mui/material";
import { ArrowBackOutlined } from "@mui/icons-material";

const boxStyle = {
  backgroundColor: "#E0E0E0",
  width: "734px",
  height: "600px",
  position: "absolute",
  top: "10%",
  right: "2%",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

function roomChat() {
  return (
    <>
      <Box sx={boxStyle}>
        <IconButton>
          <ArrowBackOutlined />
        </IconButton>
      </Box>
    </>
  );
}

export default roomChat;
