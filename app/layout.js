import '../styles/global.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PublicVoice</title>
      </head>
      <body>
        {children} {/* This is where the child components will be rendered */}
      </body>
    </html>
  );
}
