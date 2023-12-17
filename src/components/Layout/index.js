import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-[calc(100vh_-_90px)] h-[calc(100vh_-_90px)]">
        {children}
      </div>
    </div>
  );
}
