import React from "react";
import { useState } from "react"
import styled from "styled-components"
import { useDisplayFormState } from "hooks/usedisplay";
const Wrapper = styled.section`
  font-size:12px;
  background:white;
  color:#999;
  flex:1;
  display: flex;
  > ul {
    margin:15px 0;
    flex:1;
    display: flex;
    > li{
      text-align:center;
      padding:8px;
      background:#dadada;
      border-radius:8px;
      margin-left:12px;
      &.selected{
        background:rgb(235,241,255);
        color:rgb(28,94,207);
      }
    }
  }
  >button{
    border:none;
    margin:15px ;
    padding:8px;
    border-radius:8px;
    background:#dadada;
    color:#999;
    margin-right:12px;
  }
`
type Props = {
  value :'-'|'+';
  onChange:(value:'-'|'+')=>void
}
const CategorySection: React.FC<Props> = (props) => {
  const [categoryList] = useState<('-'|'+')[]>(['-', '+']);

  const category = props.value

  const categoryMap = {'-':'支出','+':'收入'};

  const { setDisplay } = useDisplayFormState()
  const close = ()=>{
    setDisplay(false)
  }
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => 
          <li 
            key={c}
            className={category === c ? 'selected' : ''}
            onClick={() => { props.onChange(c) }}
          >
            {categoryMap[c]}
          </li>
        )}

      </ul>
      <button onClick={close}>关闭</button>

    </Wrapper>
  )
}

export {CategorySection};
