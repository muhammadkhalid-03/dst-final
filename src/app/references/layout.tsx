import type { Metadata } from "next";
import Navbar from "../components/navbar/Navbar";


export const metadata: Metadata = {
  title: "DST Final",
  description: "Generated by create next app",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <Navbar />
                {children}
      </>
    );
  }