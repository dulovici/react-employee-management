export type Employee = {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  homeAddress: {
    city: string;
    ZIPCode: string;
    addressLine1: string;
    addressLine2: string;
  };
  dateOfEmployment: string;
  dateOfBirth: string;
};
