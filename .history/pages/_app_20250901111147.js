import "@/styles/globals.css";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryclient =  new Quer

  return (
    <QueryClientProvider client={queryclient} >
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
