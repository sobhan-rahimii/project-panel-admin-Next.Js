import "@/styles/globals.css";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryclient =  new QueryClient()

  return (
    <QueryClientProvider client={queryclient} >
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
