import { useState } from 'react';
import React from 'react';
import {Wrapper} from 'views/Money/NumberPadSection/NumberPadSection'

type Props = { 
  value:number ;
  onChange:(value:number)=>void;
  onOK?:()=>void
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output,_setOutput] = useState(props.value.toString())
  const setOutput = (output:string)=>{
    let newOutput:string
    // let value:string
    if(output.length>16){
      newOutput =output.slice(0,16)
    }else if(output.length === 0){
      newOutput = '0'
    }else{
      newOutput = output
    }
    _setOutput(newOutput)
    props.onChange(parseFloat(newOutput))
  }

  const numberList = ['0','1','2','3','4','5','6','7','8','9']
  const onClickButtonWrapper = (e:React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement).textContent
    if(text === null) return
    if(text){
      if(numberList.indexOf(text)>=0){
        if(output === '0'){
          setOutput(text)
        }else{
          if(output.indexOf('.') > -1 ){
            const index = output.indexOf('.')
            if(index + 2 >= output.length){
              setOutput(output + text)
            }
          }else{
            setOutput(output + text)
          }
        }
      }
      if(text === '删除'){
        if(output.length === 1){
          setOutput('')
        }else{
          setOutput(output.slice(0,-1) || '')
        }
      }
      if(text === '清空'){
        setOutput('')
      }
      if(text === '.'){
        if(output.indexOf('.')===-1){
          setOutput(output + '.')
        }
      }

      if(text === 'OK'){
        if(props.onOK){
          props.onOK()
        }
      }

    }
  }
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" 
      onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button >.</button>
      </div>
    </Wrapper>
  )
}

export { NumberPadSection }