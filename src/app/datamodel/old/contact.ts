export interface Contact {
  /*
  Some typed
    Person
    Organization

For Persons
  Patient
  Alternate patient Contact
  Provider
  Legal

For Organizations
  Insurance Provider
  Primary Care
  etc....
   */
  type: string;
  role: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}
