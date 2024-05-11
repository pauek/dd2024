type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <p>
        This is the <code>/users</code> layout
      </p>
      {children}
    </>
  );
}
