export interface MedicationSummary {
  name: string;
  classOrType: string;
  dose: string;
  doseForm: string;
  prescribedBy: string;
  startDate: string;
  adverseReactions: string;
  checked?: boolean;
  highlighted?: boolean;
  hovered?: boolean;
}
