import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Nav from "./components/Nav";
import Chatbot from "./components/Chatbot";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Nav />
          <div className="pt-20">{children}</div>
          <Chatbot />
        </body>
      </html>
    </ClerkProvider>
  );
}
