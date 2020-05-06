export class Demograohics {
  fields = [
    {
      name: 'Patient Name',
      description: '',
      fhirpath: '',
      default: '',
      extended: false
    },
    {
      name: 'Patient ID',
      description: '',
      fhirpath: '',
      default: '',
      extended: false
    },
    {
      name: 'Date of Birth',
      description: '',
      fhirpath: '',
      default: '',
      extended: false
    },
    {
      name: 'Date Last Revised',
      description: '',
      fhirpath: '',
      default: '',
      extended: false
    },
    {
      name: 'Document Date',
      description: '',
      fhirpath: '',
      default: '',
      extended: true
    },
    ];
}

/* From Mockup
  Document Date  --- Created
  Document Owner --- Author (reference to practitioner)
  Document Maintained By -- Extension
  Primary Care Provider  -- Patient/generalPractitioner
  Sex - Patient/gender
  Race - Patient/Extension (http://hl7.org/fhir/us/core/StructureDefinition/us-core-race)
  Ethincity - Patient/Extension (http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity)
  Patient Contact Info - Patient/telecom (by rank and phone, and email) and address (use home, and in period)
  Alternate Patient Contact -- Which Patient Contact?
  Author Contact Info - Practitioner (Name, telcom)
  Other Relivant Participants - careTeam.paticipants[] (Exclude Patient and PCP, and Orgs)
  Involved Organizations - careTeam.particpants[] (Organizations)


 From FHIR Careplan resource
  identifier
  intent (proposal, plan, order, option, directive)
  status (	draft | active | on-hold | revoked | completed | entered-in-error | unknown)
  title
  description
  period
  note
  category (from snomed)
  addresses

  - If replaced
  - Subplans

 */


