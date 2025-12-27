export const startMockSocket = (cb: (id: string, price: number) => void) => {
    setInterval(() => {
      const id = "eth"
      const price = 1800 + Math.random() * 50
      cb(id, Number(price.toFixed(2)))
    }, 800)
  }
  