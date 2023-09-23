"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/theme-provider";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </Provider>
  );
}
