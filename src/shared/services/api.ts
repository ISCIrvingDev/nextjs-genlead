"use server";

import axios from "axios";

// * Models
import { ApiResponse, LeadData } from "@/shared/models/api";

const API_ENDPOINT = `${process.env.API_URL}/webhook/page-analysis`;

export async function analyzeUrl(url: string): Promise<LeadData[]> {
  const formData = new FormData();
  formData.append("url", url);

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: API_ENDPOINT,
    headers: {
      typ: process.env.TYP,
      alg: process.env.ALG,
      kid: process.env.KID, // Variable de entorno
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`, // Variable de entorno
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
}
