// Route handlers: https://nextjs.org/docs/app/api-reference/file-conventions/route

type Data = {
  name: string
}

export async function GET(): Promise<Response> {
  const data: Data = { name: 'John Doe' }

  return Response.json(data)
}

// Task 1 Cristi
// create POST call NextJs
// recive on the post call email and password from login screen
// fetch vendors.json file
//  comare usrename and password against the json file
//  return a true or false reposnse if you xan find it in the json
