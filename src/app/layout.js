import Header from "@/Components/Header/header";
import './globals.css'
import { Providers } from "@/Redux/Provider"
export const metadata = {
  title: "Material UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <Providers>

      <Header/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
