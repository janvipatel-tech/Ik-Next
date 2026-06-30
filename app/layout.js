import "./globals.css";

export const metadata = {
  title: "Interview Kickstart — Build AI skills that get you hired at FAANG+",
  description:
    "Learn real-world AI skills from FAANG+ experts. Live classes, mock interviews, and end-to-end career support to land your dream tech role.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
