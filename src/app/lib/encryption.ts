import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from './definitions'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export const encrypt = (payload: SessionPayload) => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export const decrypt = async (token: string | undefined = '') => {
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch {
    console.log('Failed to decrypt token')
    return null
  }
}
