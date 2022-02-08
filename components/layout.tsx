import { NavBar } from "./navbar";
type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}