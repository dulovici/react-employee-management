import { fireEvent, render, screen } from "@testing-library/react";
import { NotificationsProvider } from "../../providers/NotificationsContext";
import { ModalProvider } from "../../providers/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";
import EmployeeForm from "../EmployeeForm";

const renderEmployeeForm = () => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <ModalProvider>
          <EmployeeForm />
        </ModalProvider>
      </NotificationsProvider>
    </QueryClientProvider>
  );
};

test("renders Employees form", () => {
  renderEmployeeForm();

  const nameTextField = screen.getByLabelText("Name") as HTMLInputElement;
  const emailTextField = screen.getByLabelText("Email") as HTMLInputElement;
  const phoneNumberTextField = screen.getByLabelText(
    "Phone Number"
  ) as HTMLInputElement;
  const cityTextField = screen.getByLabelText("City") as HTMLInputElement;
  const zipCodeTextField = screen.getByLabelText(
    "ZIP Code"
  ) as HTMLInputElement;
  const addressLine1TextField = screen.getByLabelText(
    "Address Line 1"
  ) as HTMLInputElement;
  const addressLine2TextField = screen.getByLabelText(
    "Address Line 2"
  ) as HTMLInputElement;
  const dateOfEmploymentTextField = screen.getByLabelText(
    "Date of Employment"
  ) as HTMLInputElement;
  const dateOfBirthTextField = screen.getByLabelText(
    "Date of Birth"
  ) as HTMLInputElement;

  const employee = {
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    city: "Sample City",
    zipCode: "12345",
    addressLine1: "123 Main Street",
    addressLine2: "Apt 456",
    dateOfEmployment: "2023-01-01",
    dateOfBirth: "1990-05-15",
  };

  fireEvent.change(nameTextField, { target: { value: employee.name } });
  fireEvent.change(emailTextField, { target: { value: employee.email } });
  fireEvent.change(phoneNumberTextField, {
    target: { value: employee.phoneNumber },
  });
  fireEvent.change(cityTextField, { target: { value: employee.city } });
  fireEvent.change(zipCodeTextField, { target: { value: employee.zipCode } });
  fireEvent.change(addressLine1TextField, {
    target: { value: employee.addressLine1 },
  });
  fireEvent.change(addressLine2TextField, {
    target: { value: employee.addressLine2 },
  });
  fireEvent.change(dateOfEmploymentTextField, {
    target: { value: employee.dateOfEmployment },
  });
  fireEvent.change(dateOfBirthTextField, {
    target: { value: employee.dateOfBirth },
  });

  expect(nameTextField.value).toBe(employee.name);
  expect(nameTextField.value).toBe(employee.name);
  expect(emailTextField.value).toBe(employee.email);
  expect(phoneNumberTextField.value).toBe(employee.phoneNumber);
  expect(cityTextField.value).toBe(employee.city);
  expect(zipCodeTextField.value).toBe(employee.zipCode);
  expect(addressLine1TextField.value).toBe(employee.addressLine1);
  expect(addressLine2TextField.value).toBe(employee.addressLine2);
  expect(dateOfEmploymentTextField.value).toBe(employee.dateOfEmployment);
  expect(dateOfBirthTextField.value).toBe(employee.dateOfBirth);
});
