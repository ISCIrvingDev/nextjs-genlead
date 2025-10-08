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
// xxx

// * Services
// xxx

// * Custom Hooks
// xxx

// * Providers
import { useLanguage } from "@/shared/providers/LanguageProvider";

export function useFaqs() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return {
    t,
    toggleQuestion,
    openIndex,
  };
}
