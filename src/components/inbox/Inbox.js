/* eslint-disable no-unused-vars */
import { PersonOutlineOutlined, Search } from "@mui/icons-material";
import { Avatar, Badge, Box, CircularProgress, InputAdornment, Modal, OutlinedInput, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllInbox } from "../../services";
import { boxStyle, inboxStyle, nameStyle } from "../../theme";

function Inbox({ open, close }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await getAllInbox();
      setData(res.data.inbox);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Modal open={open} onClose={close} closeAfterTransition>
      <Box sx={boxStyle}>
        <OutlinedInput
          fullWidth
          size="small"
          placeholder="Search"
          endAdornment={
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          }
          sx={{ px: 6 }}
        />

        {!loading ? (
          <>
            {data &&
              data.map((row, index) => {
                const lastMessage = row.messages[row.messages.length - 1];

                const date = new Date(lastMessage.timestamp);
                const formattedDate = date.toLocaleDateString("en-US");
                const formattedTime = date.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                });

                const lastTimestamp = `${formattedDate} ${formattedTime}`;
                return (
                  <>
                    {row?.type === "group" ? (
                      <>
                        <Stack key={index} direction="row" sx={inboxStyle}>
                          <Stack direction="row" py={2}>
                            <Avatar sx={{ display: "absolute" }}>
                              <PersonOutlineOutlined sx={{ color: "#4F4F4F" }} />
                            </Avatar>
                            <Avatar sx={{ bgcolor: "#2F80ED", ml: -2.5 }}>
                              <PersonOutlineOutlined sx={{ color: "white" }} />
                            </Avatar>
                          </Stack>
                          <Stack direction="column" px={2} py={2}>
                            <Stack direction="row" spacing={2}>
                              <Typography sx={nameStyle}>{row?.groupName}</Typography>
                              <Typography variant="caption" fontSize="14px" sx={{ minWidth: "120px", bgcolor: "" }}>
                                {lastTimestamp}
                              </Typography>
                            </Stack>
                            <Typography fontSize="14px" fontWeight="bold" sx={{}}>
                              {lastMessage?.sender} :
                            </Typography>
                            <Typography fontSize="14px" variant="caption">
                              {lastMessage?.content}
                            </Typography>
                          </Stack>
                          {!row?.read ? (
                            <>
                              <Stack sx={{ width: "10px", direction: "row", alignItems: "center" }}>
                                <Badge variant="dot" sx={{ color: "#EB5757" }} />
                              </Stack>
                            </>
                          ) : null}
                        </Stack>
                      </>
                    ) : (
                      <>
                        <Stack key={index} direction="row" sx={inboxStyle}>
                          <Stack direction="row" px="10px" py={2}>
                            <Avatar sx={{ bgcolor: "#2F80ED" }}>
                              <PersonOutlineOutlined sx={{ color: "white" }} />
                            </Avatar>
                          </Stack>
                          <Stack direction="column" px={2} py={2}>
                            <Stack direction="row" spacing={2}>
                              <Typography sx={nameStyle}>{row?.user}</Typography>
                              <Typography variant="caption" fontSize="14px">
                                {lastTimestamp}
                              </Typography>
                            </Stack>
                            <Typography variant="caption" fontSize="14px">
                              {lastMessage?.content}
                            </Typography>
                          </Stack>
                        </Stack>
                      </>
                    )}
                  </>
                );
              })}
          </>
        ) : (
          <>
            <Stack direction="column" spacing={2} sx={{ backgroundColor: "", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CircularProgress sx={{ color: "#828282" }} size="3rem" thickness="5" />
              <Typography>Loading Chats ...</Typography>
            </Stack>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default Inbox;
