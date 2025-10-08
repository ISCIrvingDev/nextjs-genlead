'use client';

import { useState } from 'react';
import { useLanguage } from '@/shared/providers/LanguageProvider';
import { apiService, LeadData } from '@/shared/services/apiService';
import { attemptService } from '@/shared/services/attemptService';
import { exportService } from '@/shared/services/exportService';
import DataTable from '@/shared/components/DataTable';
import LimitModal from '@/shared/components/LimitModal';
import { Search, Download, FileSpreadsheet } from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [leadsData, setLeadsData] = useState<LeadData[] | null>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(attemptService.getRemainingAttempts());

  const handleAnalyze = async () => {
    if (!url.trim()) return;

    if (attemptService.hasReachedLimit()) {
      setShowLimitModal(true);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await apiService.analyzeUrl(url);
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
    setUrl('');
    setLeadsData(null);
    setError('');
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

  return (
    <div className="min-h-[calc(100vh-200px)] bg-background-secondary">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {!leadsData ? (
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-text-primary">
                {t.home.title}
              </h1>
              <p className="text-xl text-text-secondary">
                {t.home.subtitle}
              </p>
            </div>

            <div className="bg-background-surface rounded-lg shadow-md p-8 space-y-6">
              <div className="space-y-4">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={t.home.urlPlaceholder}
                  className="w-full px-4 py-3 bg-background-elevated border border-borders-light rounded-md text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-all duration-200"
                  onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                />

                {error && (
                  <div className="bg-accent-error bg-opacity-10 border border-accent-error rounded-md p-4">
                    <p className="text-accent-error text-sm">{error}</p>
                  </div>
                )}

                <button
                  onClick={handleAnalyze}
                  disabled={loading || !url.trim()}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Search size={20} />
                  <span>{loading ? t.home.analyzing : t.home.analyzeButton}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-borders-light">
                <p className="text-text-muted text-sm">
                  {t.home.attemptsRemaining}: <span className="text-accent-primary font-semibold">{remainingAttempts}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-background-surface rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-accent-primary" size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-2">AI-Powered</h3>
                <p className="text-text-muted text-sm">Advanced AI extracts accurate business data</p>
              </div>

              <div className="bg-background-surface rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileSpreadsheet className="text-accent-primary" size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-2">Export Ready</h3>
                <p className="text-text-muted text-sm">Download results in Excel or PDF format</p>
              </div>

              <div className="bg-background-surface rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-accent-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="text-accent-primary" size={24} />
                </div>
                <h3 className="text-text-primary font-semibold mb-2">Fast Results</h3>
                <p className="text-text-muted text-sm">Get comprehensive lead data in seconds</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                  {t.home.title}
                </h1>
                <p className="text-text-muted text-sm">
                  {t.home.attemptsRemaining}: <span className="text-accent-primary font-semibold">{remainingAttempts}</span>
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleExportExcel}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <FileSpreadsheet size={18} />
                  <span>{t.home.downloadExcel}</span>
                </button>
                <button
                  onClick={handleExportPDF}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Download size={18} />
                  <span>{t.home.downloadPDF}</span>
                </button>
                <button
                  onClick={handleNewAnalysis}
                  className="btn-primary"
                >
                  {t.home.newAnalysis}
                </button>
              </div>
            </div>

            <DataTable data={leadsData} />
          </div>
        )}
      </div>

      <LimitModal isOpen={showLimitModal} onClose={() => setShowLimitModal(false)} />
    </div>
  );
}
