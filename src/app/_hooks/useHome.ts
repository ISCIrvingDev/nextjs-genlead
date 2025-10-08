/**
 * * Presentation Layer: Layout principal
 */

// * Props
// En los layout no se usan Props
// No hubo uso de Props

// * React
import { useState } from "react";

// * Expo
// xxx

// * Native Components
// xxx

// * Icons
// xxx

// * Models
import { LeadData } from "@/shared/models/api";

// * Services
import { analyzeUrl } from "@/shared/services/api";
import { attemptService } from "@/shared/services/attempt";
import { exportService } from "@/shared/services/export";

// * Custom Hooks
// xxx

// * Providers
import { useLanguage } from "@/shared/providers/LanguageProvider";

export function useHome() {
  const { t } = useLanguage();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [leadsData, setLeadsData] = useState<LeadData[] | null>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(
    attemptService.getRemainingAttempts()
  );

  const handleAnalyze = async () => {
    if (!url.trim()) return;

    if (attemptService.hasReachedLimit()) {
      setShowLimitModal(true);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await analyzeUrl(url);
      setLeadsData(data);
      attemptService.incrementAttempts();
      setRemainingAttempts(attemptService.getRemainingAttempts());
    } catch (err) {
      setError(t.home.error);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewAnalysis = () => {
    setUrl("");
    setLeadsData(null);
    setError("");
  };

  const handleExportExcel = () => {
    if (leadsData) {
      exportService.exportToExcel(leadsData);
    }
  };

  const handleExportPDF = () => {
    if (leadsData) {
      exportService.exportToPDF(leadsData);
    }
  };

  return {
    leadsData,
    t,
    url,
    setUrl,
    handleAnalyze,
    error,
    loading,
    remainingAttempts,
    handleExportExcel,
    handleExportPDF,
    handleNewAnalysis,
    showLimitModal,
    setShowLimitModal,
  };
}
