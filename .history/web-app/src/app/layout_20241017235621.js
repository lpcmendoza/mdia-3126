import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
                    <div className='w-full flex-none md:w-64 bg-white text-black'>
                        <Navigation />
                    </div>
                    <div className='flex-grow'>{children}</div>
                </div>
            </body>
        </html>
    );
}
