import { Navbar } from "@/componentes/Navbars";
import { API_ROUTES, fetcher } from "@/servicios/apiConfig";
import Link from "next/link";
import useSWR from "swr";

const usuarios = () => {
  // const {data,isLoading,error} = useSWR(API_ROUTES.User,fetcher);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useSWR(API_ROUTES.users, fetcher);
  // const {data, error } = useSWR(API_ROUTES.users,fetcher);

  // eslint-disable-next-line no-console
  console.log(data, isLoading, error);
  // console.log(useSWR)

  // if(isLoading) return  <div>isLoading </div>;
  // if(error) return  <div>error al cargar datos </div>;

  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <section>
        <Link href="/">
          <span> Home </span>
        </Link>
        <div className=" flex  w-full justify-center ">Usuarios</div>
      </section>

      <section className="justify-center  flex w-full">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>@Alex</td>
              <td>alex</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};
export default usuarios;
