// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from '@/types/User'
import { respondSignedContent, ResponseData } from '@/utils/backend-signer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  // TODO you REALLY need to protect this API so that only admin users can call it
  console.log('handling request to url ' + req.url)
  console.log("ALL ACCOUNTS DELETED BY ADMIN")
  res.status(204).json()
}
