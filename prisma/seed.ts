import { PrismaClient } from '../src/generated/prisma'
import crypto from 'crypto'

const prisma = new PrismaClient()

async function main() {
  // Hash the password using SHA-256
  const hashedPassword = crypto.createHash('sha256').update('test').digest('hex')
    // Create mock user
  const user = await prisma.user.upsert({
    where: { username: 'test' },
    update: {
      password_hash: hashedPassword,
    },
    create: {
      fullname: 'Test User',
      cid_hash: 'test_cid_hash_123456789',
      username: 'test',
      password_hash: hashedPassword,
      role: 'user',
      activated: true,
    },
  })

  console.log('Mock user created:', user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
