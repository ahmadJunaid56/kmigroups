import localFont from "next/font/local";
import "./globals.css"; // Ensure this CSS file exists

// Make sure the file extension is correct and the path is accurate
const geistSans = localFont({
  src: "./fonts/GallientRegular-eZoMp.ttf", // Ensure this path is correct
  variable: "--font-geist-sans",
  weight: "400 900", // Adjust weight according to the font file specifications
});

export const metadata = {
  title: "KMI - Group",
  description: "Generated by Micrologicx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
