import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function StatusModal(props: any) {
  const {
    open,
    status,
    handleOpen,
    handleClose,
    handleStatusChange,
  } = props

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center" sx={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "27px",
          }}>
            Status
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status-select"
              value={status}
              label="Status"
              onChange={handleStatusChange}
              sx={{
                height: '48px',
                verticalAlign: 'center',
                paddingBottom: '10px'
              }}
            >
              <MenuItem value="new-order">New Order</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="outlined" onClick={handleClose} sx={{
              mr: 1, borderRadius: '4px', // Adjust the border-radius to match your design
              borderColor: "#D9D9D9", // Use the color that matches your screenshot
              color: "#707070", // Use the color that matches your screenshot
              textTransform: 'none', // Prevents uppercase transformation
              fontSize: '14px', // Adjust font size to match your design
              '&:hover': {
                borderColor: "#D9D9D9", // Keeps the border color on hover
                backgroundColor: 'rgba(255, 165, 0, 0.04)' // Light orange background on hover
              },
              background: "transparent",
              height: "44px",
              // width: 130,
              fontWeight: "400",
            }}>
              Cancel
            </Button>
            <Button sx={{
              backgroundColor: '#F38B08', '&:hover': {
                backgroundColor: "#F38B08" // Light orange background on hover
              },
            }} variant="contained" onClick={handleClose}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
