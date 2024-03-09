import { ReactQueryProvider, StyledComponentsProvider } from "@/provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <StyledComponentsProvider>{children}</StyledComponentsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
