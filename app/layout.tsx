import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteTitle = 'Sasquatch is in Hawaii';
const siteDescription = 'A short film about a self-absorbed media guru and an Alabama Squatcher try to find Sasquatch in the one location no one has looked -Hawaii';
const thumbnailPath = `https://www.sasquatchisinhawaii.com/thumbnail`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#09a404" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09a404" />


      <meta property="og:title" content={siteTitle} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content="https://www.sasquatchisinhawaii.com" />
      <meta property="og:image" content={thumbnailPath} />

      <meta property="og:description" content={siteDescription} />

      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={thumbnailPath} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:site_name" content={siteTitle}></meta>
      <meta name="twitter:image:alt" content="Sasquatch is in Hawaii Movie Poster"></meta>



      <body className={inter.className}>
        {children}
        <footer className="bg-gray_dark text-white">
          {/* <div className="customContainer mx-auto flex justify-around">
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
          </div> */}
          <div className="text-sm customContainer mx-auto text-center py-3">
            <p>&copy; Butler Fuqua Films, LLC | All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
