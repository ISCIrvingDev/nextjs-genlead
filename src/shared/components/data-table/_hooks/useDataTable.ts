/**
 * * Presentation Layer: Layout principal
 */

// * Props
import { DataTableProps } from "../data-table-props";

// * React
import { useState, useMemo } from "react";

// * Expo
// xxx

// * Native Components
// xxx

// * Icons
// xxx

// * Models
import { LeadData } from "@/shared/models/api";

// * Services
// xxx

// * Custom Hooks
// xxx

// * Providers
import { useLanguage } from "@/shared/providers/LanguageProvider";

// * Types
type SortField = keyof LeadData | null;
type SortDirection = "asc" | "desc";

export function useDataTable({ data }: DataTableProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: keyof LeadData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter((lead) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        lead.companyName.toLowerCase().includes(searchLower) ||
        lead.phoneNumbers.some((phone) =>
          phone.toLowerCase().includes(searchLower)
        ) ||
        lead.websites.some((website) =>
          website.toLowerCase().includes(searchLower)
        ) ||
        lead.addresses.some((address) =>
          address.toLowerCase().includes(searchLower)
        ) ||
        lead.emails.some((email) => email.toLowerCase().includes(searchLower))
      );
    });

    if (sortField) {
      filtered = [...filtered].sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];

        let aStr = "";
        let bStr = "";

        if (Array.isArray(aValue)) {
          aStr = aValue.join(" ").toLowerCase();
        } else {
          aStr = String(aValue).toLowerCase();
        }

        if (Array.isArray(bValue)) {
          bStr = bValue.join(" ").toLowerCase();
        } else {
          bStr = String(bValue).toLowerCase();
        }

        if (sortDirection === "asc") {
          return aStr.localeCompare(bStr);
        } else {
          return bStr.localeCompare(aStr);
        }
      });
    }

    return filtered;
  }, [data, searchTerm, sortField, sortDirection]);

  return {
    t,
    searchTerm,
    setSearchTerm,
    handleSort,
    filteredAndSortedData,
  };
}
