import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./common/theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </StrictMode>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
