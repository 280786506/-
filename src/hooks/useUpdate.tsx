import { useEffect, useRef } from "react"

export const useUpdate = (fn:()=>void,deps:any[])=>{
    const count = useRef(0)
  // []什么都不写，就是第一次渲染的时候执行
  useEffect(()=>{
    count.current +=1
  })
  // useEffect 在数据变化或者 render的时候执行
  useEffect(()=>{
    if(count.current > 1){
        fn()
    }
  },deps)
}
// export {useUpdate}