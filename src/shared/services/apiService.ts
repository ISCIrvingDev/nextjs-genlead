import axios from "axios";

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

const API_ENDPOINT = "https://adminn8n.ivin-dev.com/webhook/page-analysis";

export const apiService = {
  async analyzeUrl(url: string): Promise<LeadData[]> {
    const formData = new FormData();
    formData.append("url", url);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: API_ENDPOINT,
      headers: {
        typ: "JWT",
        alg: "ES256",
        kid: "55b39b79144bde599f95db4a0df16979", // TODO: Replace with actual kid
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.ANCf_8p1AE4ZQs7QuqGAyyfTEgYrKSjKWkhBk5cIn1_2QVr2jEjmM-1tu7EgnyOf_fAsvdFXva8Sv05iTGzETg eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.ACp1usr3tulb-qPGhR-L-P0ZWSK-ZTmuUYI_ZUkBzLBeU-qrza88l4biUKGtIWANrnRv0lfYNcqEoF6W_JbkKQ", // TODO: Replace with actual bearer token
      },
      data: formData,
    };

    try {
      const response = await axios.request<ApiResponse>(config);
      return response.data.output.data;
    } catch (error) {
      console.error("Error analyzing URL:", error);
      throw new Error("Failed to analyze URL");
    }
  },
};
