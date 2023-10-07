import { Box, Button, Tab, Tabs } from "@mui/material";
import DeletedEmployeeList from "./DeletedEmployeeList";
import EmployeeList from "./EmployeeList";
import { useState } from "react";

enum ActiveList {
  Employees = 0,
  RecentlyDeleted = 1,
}

const Employees = () => {
  const [selectedTab, setSelectedTab] = useState<ActiveList>(0);

  const handleChange = (_: unknown, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "80%",
          visibility:
            selectedTab === ActiveList.Employees ? "visible" : "hidden",
        }}
      >
        <Button variant="contained">New Employee</Button>
      </Box>

      <Box>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Employees" />
          <Tab label="Recently Deleted" />
        </Tabs>
        {selectedTab === ActiveList.Employees ? (
          <EmployeeList />
        ) : (
          <DeletedEmployeeList />
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "80%",
          visibility:
            selectedTab === ActiveList.RecentlyDeleted ? "visible" : "hidden",
        }}
      >
        <Button variant="contained">Cleanup</Button>
      </Box>
    </Box>
  );
};

export default Employees;
