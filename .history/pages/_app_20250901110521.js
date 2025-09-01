import "@/styles/globals.css";
import { useQueryClient } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {

  const queryclient = useQueryClient()
  

  return <Component {...pageProps} />;
}
