export interface LeadData {
  companyName: string;
  phoneNumbers: string[];
  websites: string[];
  addresses: string[];
  emails: string[];
}
export interface ApiResponse {
  output: {
    data: LeadData[];
  };
}
