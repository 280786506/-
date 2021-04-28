import styled from "styled-components"
import React, { ChangeEventHandler } from "react";
import { Input } from "components/Input";

const Wrapper = styled.section`
  background:#ffffff;
  padding:0px 14px;
  font-size:14px;
 
`
type Props = {
  value:string;
  onChange:(value:string)=> void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  // 非受控组件
  const onChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
      props.onChange(e.target.value)
  }
  /*
    函数组件不支持 ref

    受控组件
    value={note}
    onChange={(e)=>setNote(e.target.value)}

    非受控组件
    defaultValue={note}
    onBlur={x}

    受控组件是指用户每次输入值或是组件的值改变的时候都会触发事件
    非受控是焦点消失时候才会触发事件，不关注过程只关注结果
  */
  return (
    <Wrapper>
      <Input label="备注"  value={note}
        onChange={onChange} placeholder="添加备注" >
        {/* <span>备注</span>
        <input placeholder="添加备注" 
        type="text" 
        defaultValue={note}
        onBlur={onBlur}
        /> */}
      </Input>
    </Wrapper>
  )
}

export { NotesSection }