import { fireEvent, render, screen } from "@testing-library/react";
import Employees from "../Employees";
import { NotificationsProvider } from "../../providers/NotificationsContext";
import { ModalProvider } from "../../providers/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { spyUseDeletedEmployes, spyUseGetEmployes } from "./employeeMocks";

const renderEmployeesPage = () => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <ModalProvider>
          <Employees />
        </ModalProvider>
      </NotificationsProvider>
    </QueryClientProvider>
  );
};

test("renders Employees component with tabs", () => {
  renderEmployeesPage();

  const employeesTab = screen.getByText("Employees");
  const recentlyDeletedTab = screen.getByText("Recently Deleted");

  expect(employeesTab).toBeTruthy();
  expect(recentlyDeletedTab).toBeTruthy();
});

test('displays EmployeeList when "Employees" tab is selected', () => {
  spyUseGetEmployes();

  renderEmployeesPage();

  const employeeList = screen.getByTestId("employee-list");
  expect(employeeList).toBeTruthy();
});

test('displays DeletedEmployeeList when "Recently Deleted" tab is selected', () => {
  spyUseDeletedEmployes();

  renderEmployeesPage();

  const recentlyDeletedTab = screen.getByText("Recently Deleted");
  fireEvent.click(recentlyDeletedTab);

  const employeeList = screen.getByTestId("employee-list");
  expect(employeeList).toBeTruthy();
});
