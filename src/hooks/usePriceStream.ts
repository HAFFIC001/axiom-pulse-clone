import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { updatePrice } from "@/store/tokenSlice"
import { startMockSocket } from "@/services/websocket.mock"

export const usePriceStream = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    startMockSocket((id, price) => {
      dispatch(updatePrice({ id, price }))
    })
  }, [dispatch])
}
