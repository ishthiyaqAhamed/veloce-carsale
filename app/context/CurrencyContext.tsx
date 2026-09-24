"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "LKR" | "USD" | "GBP" | "AED" | "EUR";

export interface CurrencyConfig {
  code: CurrencyCode;
  label: string;
  name: string;
  symbol: string;
  rate: number; // Conversion rate: 1 unit of foreign currency = X LKR
  flag: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  LKR: { code: "LKR", label: "LKR", name: "Sri Lankan Rupee", symbol: "LKR ", rate: 1, flag: "🇱🇰" },
  USD: { code: "USD", label: "USD", name: "US Dollar", symbol: "$", rate: 300, flag: "🇺🇸" },
  GBP: { code: "GBP", label: "GBP", name: "British Pound", symbol: "£", rate: 390, flag: "🇬🇧" },
  AED: { code: "AED", label: "AED", name: "UAE Dirham", symbol: "AED ", rate: 81.7, flag: "🇦🇪" },
  EUR: { code: "EUR", label: "EUR", name: "Euro", symbol: "€", rate: 330, flag: "🇪🇺" },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (lkrPrice: number) => string;
  activeCurrencyConfig: CurrencyConfig;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("LKR");

  useEffect(() => {
    const saved = localStorage.getItem("selected_currency") as CurrencyCode;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("selected_currency", c);
    } catch {
      // ignore
    }
  };

  const formatPrice = (lkrPrice: number): string => {
    const config = CURRENCIES[currency];
    if (currency === "LKR") {
      return `LKR ${lkrPrice.toLocaleString()}`;
    }
    const converted = Math.round(lkrPrice / config.rate);
    return `${config.symbol}${converted.toLocaleString()}`;
  };

  const activeCurrencyConfig = CURRENCIES[currency];

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, activeCurrencyConfig }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
