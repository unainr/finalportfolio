import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio | UNAIN NextJs Developer | Full Stack & AI Specialist",
  description: "Portfolio | Unain | Software Engineer | Web Developer | UI/UX Designer | Full-Stack Developer | AI Expert | React, Next.js, Node.js specialist building scalable web applications, e-commerce platforms, and AI-powered solutions. 30+ projects completed.",
  
  keywords: [
    "Full Stack Developer",
    "React Developer", 
    "Next.js Developer",
    "Node.js Developer",
    "AI Developer",
    "Web Developer Pakistan",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Prisma",
    "Supabase",
    "Appwrite",
    "Laravel Developer",
    "Express.js",
    "AI Integration",
    "Voice AI",
    "Web3 Developer",
    "E-commerce Developer",
    "CMS Development",
    "UI/UX Developer",
    "Cloudinary",
    "API Development"
  ],
  authors: [{ name: "Muhammad  Unain " }],
  creator: "Muhammad Unain ",
  publisher: " Muhammad Unain ",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unainr.vercel.app',
    title: "Muhammad Unain  | Full Stack Developer & AI Specialist",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and AI integration. I build scalable web applications, e-commerce platforms, and AI-powered solutions.",
    siteName: "Muhammad Unain  Portfolio",
    images: [
      {
        url: '/og-image.jpg', // Add your image to public folder
        width: 1200,
        height: 630,
        alt: 'Muhammad Unain  - Full Stack Developer Portfolio',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Muhammad Unain  | Full Stack Developer & AI Specialist",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and AI integration. Building modern web applications and AI solutions.",
    images: ['/og-image.jpg'], // Same image as OpenGraph
    creator: '@unainr', // Replace with your actual Twitter handle
  },
  
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  
  alternates: {
    canonical: 'https://unainr.vercel.app',
  },
  
  category: 'technology',
  
  other: {
    'application-name': 'Muhammad Unain  Portfolio',
    'apple-mobile-web-app-title': 'Muhammad Unain ',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  }
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
