import { NavegadorCard } from "@/componentes/card";


const Home=()=> {
  return (
    
      <main className=" flex flex-col h-screem w- full items-center justify-center gap-4" >
        <h1> Proyecto</h1>
        <div className=" flex gap-4">
        <NavegadorCard  titulo="Materiales"
        descripcion="Gestion de materiales"
         href="/gestion"
        
        />
        <NavegadorCard 
         titulo="Salidas "
        descripcion="Salida de materiales"
        href="/salidas"
        />
        <NavegadorCard 
          titulo="Entrada"
           descripcion="Entrada de materiales"
           href="/entradas"
        />
         <NavegadorCard 
          titulo="Usuarios"
           descripcion="Usuarios"
           href="/usuarios"
        />
        </div>
        
      </main>
  
   
    
   
  )
}
export default Home;