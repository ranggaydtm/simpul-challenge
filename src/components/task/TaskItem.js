/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { MoreHoriz } from "@mui/icons-material";
import { Checkbox, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useState } from "react";

function TaskItem({ title, dueDate, daysLeft, description }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container sx={{ p: 2, mb: 2, bgcolor: "red" }}>
      <Grid item xs={1} sx={{ ml: -2 }}>
        <Checkbox />
      </Grid>
      <Grid item xs={8}>
        <Typography>{title}</Typography>
        <Typography>{daysLeft}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{dueDate}</Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <MoreHoriz />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default TaskItem;
