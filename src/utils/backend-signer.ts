import crypto from 'crypto'
import { deterministicReplacer } from '@/utils/helpers'
import { NextApiResponse } from 'next'

export const signContent = async (content: any) => {
  // const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'base64').toString('ascii')
  const privateKey = process.env.PRIVATE_KEY
  if (!privateKey) {
    throw new Error('The environmental variable PRIVATE_KEY must be set')
  }
  const signer = crypto.createSign('RSA-SHA256')

  const message = JSON.stringify(content, deterministicReplacer)
  const base64Msg = Buffer.from(message, 'utf-8').toString('base64')
  signer.update(base64Msg)

  const signature = signer.sign(privateKey, 'base64')

  return signature
}

export type ResponseData = {
  content: any
  signature: string
}

export const respondSignedContent = async (res: NextApiResponse<ResponseData>, code: number = 200, content: any = {}) => {
  const signature = await signContent(content)
  /**
    * If you uncomment this line, simulating an attempt at
    * tampering with the data, the request will be rejected.
    */
  // content.name = 'John Dough'
  res.status(code).send({ content, signature })
}
