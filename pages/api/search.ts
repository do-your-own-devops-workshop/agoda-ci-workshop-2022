import { NextApiResponse, NextApiRequest } from 'next';
import { PropertyDb } from '../../db/fakedb';

export async function SearchApi(query?: string | string[]) {
  const q = typeof query === 'undefined'
                ? ''
                : Array.isArray(query)
                  ? query[0]
                  : query;
  return {
    query: q,
    results: PropertyDb.filter(property => property.name.toLowerCase().includes(q.toLowerCase())),
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<PropertySearchResult[]>) {
  return res.status(200).json(
    (await SearchApi(req.query['q'])).results
  );
}
