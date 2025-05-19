import Main from "@/components/template/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

      <Main>{children}</Main>
  );
}
