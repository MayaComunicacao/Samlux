import type { NextApiRequest, NextApiResponse } from 'next';
import { SearchProductsOBJ } from '../../hooks/querys';

interface Data {
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<any> {
  const termSearch = req.body;

  const result = await (
    await SearchProductsOBJ.queryExecute(termSearch as string)
  ).products;

  if (result !== null) {
    res.status(200).json(result);
  } else {
    res.status(404);
  }

  // res.end();
}
