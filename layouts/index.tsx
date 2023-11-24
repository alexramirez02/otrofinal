import { Navbar } from "@/components/ui/Navbars";
import { ToastContainer } from 'react-toastify';


interface Layoutprops{
  children: React.ReactNode;
}
const Layout=({children}:Layoutprops)=>{
return (
  <main>
    <Navbar />
    {children}
    <ToastContainer />
  </main>
);
};
export {Layout};