/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, Button, CircularProgress, Container, FormControl, MenuItem, Modal, Select, Stack, Typography } from "@mui/material";
import { boxStyle } from "../../theme";
import { useEffect, useState } from "react";
import { getAllTask } from "../../services";
import TaskItem from "./TaskItem";

function TaskManager({ open, close }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTask = async () => {
    setLoading(true);
    try {
      const res = await getAllTask();
      setList(res.data);
      console.log(list);
      console.log(res.data);
      if (res.status === "success") {
        console.log(list);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, [open]);

  return (
    <>
      <Modal open={open} onClose={close} closeAfterTransition>
        <Box sx={boxStyle}>
          <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
            <FormControl>
              <Select defaultValue={1} sx={{ width: "150px" }}>
                <MenuItem value={1}>My Task</MenuItem>
                <MenuItem value={2}>Personal Errands</MenuItem>
                <MenuItem value={3}>Urgent To-Do</MenuItem>
              </Select>
            </FormControl>
            <Button size="small" variant="contained">
              New Task
            </Button>
          </Stack>

          {!loading ? (
            <></>
          ) : (
            <>
              <Stack direction="column" spacing={2} sx={{ backgroundColor: "", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress sx={{ color: "#828282" }} size="3rem" thickness="5" />
                <Typography>Loading Task List ...</Typography>
              </Stack>
            </>
          )}
          {/* {list && list.length > 0 ? (
            list.map((row, index) => (
              <Container key={index}>
                <TaskItem title={row?.title} dueDate={row?.dueDate} daysLeft={row?.daysLeft} description={row?.description} />
              </Container>
            ))
          ) : (
            <Typography variant="caption" fontSize="16px">
              No Tasks Available
            </Typography>
          )} */}
          {/* {list &&
            list.map((row, index) => (
              <>
                <Container key={index}>
                  <TaskItem title={row?.title} dueDate={row?.dueDate} daysLeft={row?.daysLeft} description={row?.description} />
                </Container>
              </>
            ))} */}
        </Box>
      </Modal>
    </>
  );
}

export default TaskManager;
