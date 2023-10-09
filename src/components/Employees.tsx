import { Box, Tab, Tabs } from "@mui/material";
import DeletedEmployeeList from "./DeletedEmployeeList";
import EmployeeList from "./EmployeeList";
import { useState } from "react";

enum ActiveList {
  Employees = 0,
  RecentlyDeleted = 1,
}

const Employees = () => {
  const [selectedTab, setSelectedTab] = useState<ActiveList>(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
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
  );
};

export default Employees;
