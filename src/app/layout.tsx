import Header from "./components/Header";
import "./globals.css"
import Providers from "./provider";

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
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}

export default MainLayout