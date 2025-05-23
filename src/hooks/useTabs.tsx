import { useEffect, useState } from "react";

export const useTabs = (groupKey: string, defaultTab: string) => {
  const storageKey = `activeTab-${groupKey}`;

  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setActiveTab(stored);
    }
    setIsHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(storageKey, activeTab);
    }
  }, [activeTab, storageKey, isHydrated]);

  return { activeTab, setActiveTab, isHydrated };
};
