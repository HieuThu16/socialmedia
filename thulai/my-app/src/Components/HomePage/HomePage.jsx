import React from "react";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  return (
    <Grid container className="px-5 lg:px-36 justify-between">
      {/* Left Part */}
      <Grid item xs={12} lg={3} className="w-full relative">
        <p className="text-center">left part</p>
      </Grid>

      {/* Middle Part */}
      <Grid item xs={12} lg={6} className="w-full relative">
        <p className="text-center">middle part</p>
      </Grid>

      {/* Right Part */}
      <Grid item xs={12} lg={3} className="w-full relative">
        <p className="text-center">right part</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
