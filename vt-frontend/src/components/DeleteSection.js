import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AddBlogSection = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      <Box
        component="span"
        sx={{
          display: 'block',
          backgroundColor: 'white',
          padding: '20px',
          marginTop: '35px',
          textAlign: 'center',
        }}
      >
        <div className="addBlog">
          <h2>What do you want to do next? Delete it!</h2>
          <Link to={`/delete${url}`}>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default AddBlogSection;
