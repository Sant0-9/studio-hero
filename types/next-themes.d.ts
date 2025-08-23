declare module "next-themes" {
  import * as React from "react";

  export interface ThemeProviderProps {
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    children?: React.ReactNode;
  }

  export const ThemeProvider: React.ComponentType<ThemeProviderProps>;

  export function useTheme(): {
    theme?: string;
    setTheme: (theme: string) => void;
    resolvedTheme?: string;
    systemTheme?: string;
  };
}
