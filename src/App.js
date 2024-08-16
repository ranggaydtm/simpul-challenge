/* eslint-disable no-unused-vars */
import { AppBar, Box, Container, Grid, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from "@mui/material";
import { ForumOutlined, ChromeReaderModeOutlined, ShowChart, Search } from "@mui/icons-material";
import { useState } from "react";
import Inbox from "./components/inbox/Inbox";
import Task from "./components/task/Task";

function App() {
  const [click, setClick] = useState(false);
  const [modal, setModal] = useState(false);
  const [inbox, setInbox] = useState(false);
  const [task, setTask] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleClose = () => setModal(false);

  return (
    <>
      {modal === "inbox" && <Inbox open={modal === "inbox"} close={handleClose} />}
      {modal === "task" && <Task open={modal === "task"} close={handleClose} />}
      <Container maxWidth={false} sx={{ height: "100dvh", backgroundColor: "#0F8A69" }}>
        <Box
          sx={{
            height: "100%",
          }}
        >
          <AppBar sx={{ backgroundColor: "transparent" }}>
            <OutlinedInput
              fullWidth
              sx={{ backgroundColor: "transparent" }}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </AppBar>
          <Stack direction="column" sx={{ color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "80%" }}>
            <Typography fontSize="72px" fontWeight={800}>
              Simple
            </Typography>
            <Typography fontSize="72px" fontWeight={800}>
              Quicks
            </Typography>
          </Stack>
        </Box>
        {!click ? (
          <>
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                right: 20,
              }}
            >
              <IconButton
                sx={{
                  borderRadius: "50%",
                  padding: 1,
                  color: "#FFF",
                  backgroundColor: "#2F80ED",
                  "&:hover": {
                    backgroundColor: "#2F80ED",
                  },
                }}
                onClick={handleClick}
              >
                <ShowChart sx={{ fontSize: "32px", transform: "scaleX(-1) rotate(120deg)" }} />
              </IconButton>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                right: 20,
              }}
            >
              <Stack direction="row-reverse" justifyContent="space-between" width="180px">
                <Stack display="flex" justifyContent="end">
                  <IconButton
                    sx={{
                      borderRadius: "50%",
                      padding: 1,
                      color: "#FFF",
                      backgroundColor: "#2F80ED",
                      "&:hover": {
                        backgroundColor: "#2F80ED",
                      },
                    }}
                    onClick={handleClick}
                  >
                    <ShowChart sx={{ fontSize: "32px", transform: "scaleX(-1) rotate(120deg)" }} />
                  </IconButton>
                </Stack>
                <Stack direction="column" alignItems="center">
                  <Typography variant="caption" sx={{ color: "#FFF" }}>
                    Inbox
                  </Typography>
                  <IconButton
                    onClick={() => setModal("inbox")}
                    sx={{
                      borderRadius: "50%",
                      padding: 1,
                      color: "#8785FF",
                      backgroundColor: "#E0E0E0",
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                  >
                    <ForumOutlined sx={{ fontSize: "32px" }} />
                  </IconButton>
                </Stack>
                <Stack direction="column" alignItems="center">
                  <Typography variant="caption" sx={{ color: "#FFF" }}>
                    Task
                  </Typography>
                  <IconButton
                    onClick={() => setModal("task")}
                    sx={{
                      borderRadius: "50%",
                      padding: 1,
                      color: "#F8B76B",
                      backgroundColor: "#E0E0E0",
                      "&:hover": {
                        backgroundColor: "#E0E0E0",
                      },
                    }}
                  >
                    <ChromeReaderModeOutlined sx={{ fontSize: "32px" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
