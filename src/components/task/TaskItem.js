/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { ExpandMore, MoreHoriz } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

function TaskItem({ title, dueDate, daysLeft, description, finish }) {
  return (
    <Grid container sx={{ mt: 1, bgcolor: "" }}>
      <Accordion sx={{ bgcolor: "#E0E0E0", width: "100%" }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Stack direction="row" width="100%" sx={{ bgcolor: "" }}>
            <Stack sx={{ ml: -2 }}>
              <Checkbox />
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
              {finish ? (
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{
                    color: "grey",
                    textDecoration: "line-through",
                  }}
                >
                  {title}
                </Typography>
              ) : (
                <Typography variant="subtitle2" fontWeight="bold">
                  {title}
                </Typography>
              )}
              <Stack direction="row" spacing={2} sx={{ bgcolor: "" }}>
                <Typography variant="caption" fontSize="14px" color="error">
                  {daysLeft}
                </Typography>
                <Typography variant="caption" fontSize="14px">
                  {dueDate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* <Grid direction="row">
            <Checkbox size="small" />
            <Typography>{title}</Typography>
            <Typography>{dueDate}</Typography>
          </Grid> */}
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default TaskItem;
