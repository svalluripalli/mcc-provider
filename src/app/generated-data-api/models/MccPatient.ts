/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Patient } from "fhir/r4";
import { Contact } from "..";

export type MccPatient = {
    name?: string;
    id?: string;
    age?: string;
    fhirid?: string;
    dateOfBirth?: string;
    gender?: string;
    race?: string;
    ethnicity?: string;
    contacts?: Array<Contact>;
}
