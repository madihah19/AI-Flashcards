//import "../styles/globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.className} ${libre_baskerville.className}`}>
        <body className="overflow-x-hidden antialiased">
          <main>
            {process.env.NODE_ENV === "development" && (
              <div
                style={{
                  background: "#5163ba",
                  padding: "1rem",
                  textAlign: "center",
                  fontSize: "0.85rem",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>
                    Home
                  </Link>
                  <Link href="/about-us" style={{ color: "#fff", textDecoration: "none" }}>
                    About Us
                  </Link>
                  <Link href="/#Features" style={{ color: "#fff", textDecoration: "none" }}>
                  Why us?
                  </Link>
                  {/* Update the href to the main page with the pricing section */}
                  <Link href="/#pricing" style={{ color: "#fff", textDecoration: "none" }}>
                    Pricing
                  </Link>
                </div>
               
                <Link href="/sign-in">
                  <button
                    style={{
                      background: "#ffffff",
                      color: "#5163ba",
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Log in
                  </button>
                </Link>
              </div>
            )}
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
