import React, { useState } from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Search from "../components/Search";
import Favorite from "../components/Favorite";
import Issue from "../components/Issue";
import NoSsr from "@mui/material/NoSsr";
import { TabPanelProps } from "../types";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg">
      <NoSsr>
        <Box>
          <Box
            sx={{
              width: "100%",
              paddingBottom: "20px",
            }}
          >
            <Tabs value={value} onChange={handleChange} centered>
              <Tab
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "black",
                }}
                label="Search"
              />
              <Tab
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "black",
                }}
                label="Favorite"
              />
              <Tab
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "black",
                }}
                label="Issue"
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Search />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Favorite />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Issue />
          </TabPanel>
        </Box>
      </NoSsr>
    </Container>
  );
};

export default Home;
