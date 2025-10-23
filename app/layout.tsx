import {monserrat} from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${monserrat.className} antialiased p-2`}
      >
        <header className="bg-blue-600 py-10 flex justify-center items-center text-white text-xl rounded-md antialiased">
          Este es el header de la pagina main!
        </header>
        {children}
        <footer className="bg-blue-600 py-10 flex justify-center items-center text-white text-xl rounded-md antialiased">
          Hecho con amor por la gente de vercel!
        </footer>
      </body>
    </html>
  );
}
