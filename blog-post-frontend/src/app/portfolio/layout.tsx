export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen grow flex-col justify-center">
      <h1 className="mb-4 font-bold text-8xl">Our Works</h1>
      {children}
    </div>
  );
}
