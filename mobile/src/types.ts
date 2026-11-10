export type HexColor = string;

export interface FamilyMember {
  name: string;
  color: HexColor;
}

export interface Phone {
  owner: FamilyMember;
  keyIssued: string;
  lastCheckIn: string;
}
