import Layout from "@/components/layout/layout";
import UseScrollToTop from "@/hooks/useScrollToTop";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <ThemeProvider attribute="class">
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <UseScrollToTop />
        </div>
      </ThemeProvider>
    </AnimatePresence>
  );
}
