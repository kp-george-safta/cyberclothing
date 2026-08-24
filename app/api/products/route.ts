// Route handlers: https://nextjs.org/docs/app/api-reference/file-conventions/route

type Data = {
  name: string
}

export async function GET(): Promise<Response> {
  const data: Data = { name: 'John Doe 2' }

  return Response.json(data)
}
