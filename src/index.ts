import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ message: 'AngstromSCD BAML Service' })
})

app.post('/prompt', async (c) => {
  const body = await c.req.json()
  // BAML prompt processing logic here
  return c.json({ result: 'processed' })
})

const port = 3002
console.log(`BAML service running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
