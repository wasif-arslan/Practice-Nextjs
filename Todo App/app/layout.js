export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"
        />
      </head>

      <body>
        <h1 className="text-xs font-bold">Awesome Todo App</h1>
        {children}
      </body>
    </html>
  );
}
