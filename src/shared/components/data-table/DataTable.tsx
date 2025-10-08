'use client';

// * Icons
import { Search, ArrowUpDown } from 'lucide-react';

// * Props
import { DataTableProps } from './data-table-props';

// * MVVM
import { useDataTable } from './_hooks/useDataTable';

export default function DataTable({ data }: DataTableProps) {
  const {
    t,
    searchTerm,
    setSearchTerm,
    handleSort,
    filteredAndSortedData
  } = useDataTable({ data })

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
        <input
          type="text"
          placeholder={t.home.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-background-surface border border-borders-light rounded-md text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-all duration-200"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-borders-light">
        <table className="w-full">
          <thead className="bg-background-elevated">
            <tr>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('companyName')}
                  className="flex items-center space-x-2 text-text-primary font-semibold hover:text-accent-primary transition-colors"
                >
                  <span>{t.home.table.companyName}</span>
                  <ArrowUpDown size={16} />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('phoneNumbers')}
                  className="flex items-center space-x-2 text-text-primary font-semibold hover:text-accent-primary transition-colors"
                >
                  <span>{t.home.table.phoneNumbers}</span>
                  <ArrowUpDown size={16} />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('websites')}
                  className="flex items-center space-x-2 text-text-primary font-semibold hover:text-accent-primary transition-colors"
                >
                  <span>{t.home.table.websites}</span>
                  <ArrowUpDown size={16} />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('addresses')}
                  className="flex items-center space-x-2 text-text-primary font-semibold hover:text-accent-primary transition-colors"
                >
                  <span>{t.home.table.addresses}</span>
                  <ArrowUpDown size={16} />
                </button>
              </th>
              <th className="px-6 py-4 text-left">
                <button
                  onClick={() => handleSort('emails')}
                  className="flex items-center space-x-2 text-text-primary font-semibold hover:text-accent-primary transition-colors"
                >
                  <span>{t.home.table.emails}</span>
                  <ArrowUpDown size={16} />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-text-muted">
                  {t.home.noResults}
                </td>
              </tr>
            ) : (
              filteredAndSortedData.map((lead, index) => (
                <tr
                  key={index}
                  className="border-t border-borders-light hover:bg-states-hover transition-colors"
                >
                  <td className="px-6 py-4 text-text-primary font-medium">
                    {lead.companyName}
                  </td>
                  <td className="px-6 py-4 text-text-secondary text-sm">
                    {lead.phoneNumbers.join(', ')}
                  </td>
                  <td className="px-6 py-4 text-text-secondary text-sm">
                    {lead.websites.map((website, idx) => (
                      <a
                        key={idx}
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary hover:underline block truncate max-w-xs"
                      >
                        {website}
                      </a>
                    ))}
                  </td>
                  <td className="px-6 py-4 text-text-secondary text-sm">
                    {lead.addresses.join(', ')}
                  </td>
                  <td className="px-6 py-4 text-text-secondary text-sm">
                    {lead.emails.join(', ')}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
