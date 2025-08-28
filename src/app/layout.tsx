import Header from "./components/Header";
import "./globals.css"

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>
        <Header />
        <div
          className="bg-red-500 pt-28 min-h-screen items-center flex flex-col"
        >
          {children}
        </div>
      </body>
    </html>
  );
}

export default MainLayout