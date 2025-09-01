import "@/styles/globals.css";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryclient = useQueryClient();

  return (
    <QueryClientProvider client={que} >
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
