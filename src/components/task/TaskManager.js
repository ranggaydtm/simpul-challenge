/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Box, Button, CircularProgress, FormControl, MenuItem, Modal, Select, Stack, Typography } from "@mui/material";
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
      if (res.data) {
        setList(res.data.task);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <Modal open={open} onClose={close} closeAfterTransition>
        <Box sx={boxStyle}>
          <Stack direction="row" justifyContent="space-between" sx={{ width: "100%", height: "40px" }}>
            <FormControl>
              <Select size="small" defaultValue={1} sx={{ width: "150px" }}>
                <MenuItem value={1}>My Task</MenuItem>
                <MenuItem value={2}>Personal Errands</MenuItem>
                <MenuItem value={3}>Urgent To-Do</MenuItem>
              </Select>
            </FormControl>
            <Button size="large" variant="contained" sx={{ textTransform: "none", borderRadius: "8px", padding: "2px 16px" }}>
              New Task
            </Button>
          </Stack>

          {!loading ? (
            <>{list && list.map((row) => <TaskItem title={row?.title} daysLeft={row?.daysLeft} dueDate={row?.dueDate} description={row?.description} finish={row?.finished} />)}</>
          ) : (
            <>
              <Stack direction="column" spacing={2} sx={{ backgroundColor: "", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <CircularProgress sx={{ color: "#828282" }} size="3rem" thickness="5" />
                <Typography>Loading Task List ...</Typography>
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default TaskManager;
