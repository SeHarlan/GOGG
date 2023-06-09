import { ICONS, useWindowsContext, WINDOWS } from "../context/WindowsProvider";
import { FC } from "react";

const Icons: FC = () => {
  const { orderState, minimizedState } = useWindowsContext()
  const [orderList, setOrderList] = orderState
  const [minimizedMap, setMinimizedMap] = minimizedState
  return (
    <div className="flex z-[2] flex-col gap-5 relative top-10 left-10 items-center w-24">
      {Object.values(WINDOWS).map(windowKey => {
        const handleClick = () => {
          const newOrder = [...orderList]
          const orderIndex = orderList.findIndex(item => item === windowKey);

          setMinimizedMap(prev => ({
            ...prev,
            [windowKey]: false
          }))

          newOrder.splice(orderIndex, 1)
          newOrder.push(windowKey)
          setOrderList(newOrder)
        }
        return (
          <div
            key={windowKey}
            className="custom-cursor select-none text-white flex flex-col items-center w-fit"
            onDoubleClick={handleClick}
          >
            <img src={ICONS[windowKey]} alt={`${windowKey} Icon`} className="w-14 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.5)] mb-1" />
            {windowKey}
          </div>
        )
      })}
    </div>
  )
}

export default Icons