import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sasquatch is in Hawai'i",
  description: "A short film about a self-obsorbed media guru and an Alabama Squatcher try to find Sasquatch in the one location no one has looked -Hawai'i",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-green-200">
          <div className="customContainer mx-auto flex justify-around">
            <div>
              <h3 className="font-bold text-lg">Item title</h3>
              <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg">Item title</h3>
              <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </div>
          </div>
          <div className="text-sm customContainer mx-auto text-center py-3">
            <p>&copy; Butler Fuqua Films, LLC | All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
