import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { LeadData } from "./apiService";

export const exportService = {
  exportToExcel(data: LeadData[], filename: string = "leads.xlsx"): void {
    const formattedData = data.map((lead) => ({
      "Company Name": lead.companyName,
      "Phone Numbers": lead.phoneNumbers.join(", "),
      Websites: lead.websites.join(", "),
      Addresses: lead.addresses.join(", "),
      Emails: lead.emails.join(", "),
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

    const colWidths = [
      { wch: 30 },
      { wch: 20 },
      { wch: 40 },
      { wch: 40 },
      { wch: 30 },
    ];
    worksheet["!cols"] = colWidths;

    XLSX.writeFile(workbook, filename);
  },

  exportToPDF(data: LeadData[], filename: string = "leads.pdf"): void {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    doc.setFontSize(18);
    doc.text("Lead Generation Report", 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 22);

    const tableData = data.map((lead) => [
      lead.companyName,
      lead.phoneNumbers.join("\n"),
      lead.websites.join("\n"),
      lead.addresses.join("\n"),
      lead.emails.join("\n"),
    ]);

    autoTable(doc, {
      head: [
        ["Company Name", "Phone Numbers", "Websites", "Addresses", "Emails"],
      ],
      body: tableData,
      startY: 28,
      styles: {
        fontSize: 8,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [74, 222, 128],
        textColor: [0, 0, 0],
        fontStyle: "bold",
      },
      columnStyles: {
        0: { cellWidth: 50 },
        1: { cellWidth: 40 },
        2: { cellWidth: 60 },
        3: { cellWidth: 60 },
        4: { cellWidth: 40 },
      },
      margin: { top: 28 },
    });

    doc.save(filename);
  },
};
