import type { NextApiRequest, NextApiResponse } from 'next';
import { GetBrandIdOBJ, GetProductsByBrandOBJ } from '../../hooks/querys';

interface Data {
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<any> {
  const termSearch = req.body;

  if (!termSearch) res.end();

  const result_id = await (
    await GetBrandIdOBJ.queryExecute(termSearch as string)
  ).id;

  if (!result_id) res.end();

  const productsByBrand = await (
    await GetProductsByBrandOBJ.queryExecute(result_id)
  ).products;

  if (productsByBrand !== null) {
    res.status(200).json(productsByBrand);
  } else {
    res.status(404);
  }
}
