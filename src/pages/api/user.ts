// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from '@/types/User'
import { respondSignedContent, ResponseData } from '@/utils/backend-signer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const user: User = { name: 'John Doe' }
  return respondSignedContent(res, 200, user)
}
