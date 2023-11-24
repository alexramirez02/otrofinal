import Link from "next/link";


interface Navegadorprops{
    titulo: string;
    descripcion:string;
    href:string;

}
const NavegadorCard =({titulo,descripcion,href} :Navegadorprops)=>{


    return (

        <div className="card">
    <Link href={href}>
        <h1>{titulo} </h1>
        <span>{descripcion} </span>
    </Link>
 </div>
   
    );
 
};
export {NavegadorCard};