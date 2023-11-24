import { type  NextApiRequest, type NextApiResponse } from "next";
import { MyUsers } from "@/util/data/Users";

export default function handler(request: NextApiRequest, response: NextApiResponse){
  if (request.method==='GET'){
    response.status(200).end(MyUsers);
    // return response;

  }
}