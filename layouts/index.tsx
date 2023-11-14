import { Navbar } from "@/componentes/Navbars";



interface Layoutprops{
  children: React.ReactNode;
}
const Layout=({children}:Layoutprops)=>{
return(
  <main>
    <Navbar/>
    {children}
    </main>
)
};
export {Layout};