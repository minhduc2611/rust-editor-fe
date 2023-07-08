import { ThemeProvider } from "@/components/common/theme-provider";
import { cn } from "@/lib/utils";
import RecoilProvider from "@/stores";
import { Inter as FontSans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode
}


// export default function RootLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return (
//         // <RecoilProvider>
//             <html lang="en">
//                 <body
//                     className={cn(
//                         "min-h-screen bg-background font-sans antialiased",
//                         fontSans.variable,
//                         fontHeading.variable,
//                         inter.className
//                     )}
//                 >
//                     <ThemeProvider
//                         attribute="class"
//                         defaultTheme="system"
//                         enableSystem
//                     >
//                         {children}
//                     </ThemeProvider>
//                 </body>
//             </html>
//         // </RecoilProvider>
//     );
// }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  )
}