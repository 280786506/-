import styled from "styled-components"

const Flex = styled.div`
display: flex;
flex-direction:column;
height:100vh;
`

const Wrapper = styled.div`
 padding:0 16px;
 .ant-picker{
  padding:4px 0;
 }
 .anticon {
   color:#fff
 }
 .ant-picker.ant-picker-borderless{
   width:85px;
 }
 .ant-picker-input > input{
   color:#fff
 }
`
const Title = styled.div`
  font-size:18px;
  font-weight:bold;
  color:white;
  padding:16px 0;
`

const BackGround = styled.div`
 position:absolute;
 height:130px;
 width:100%;
 top:0;
 background:rgb(16,108,255);
 z-index:-1;
`

const Total = styled.div`
  background:#fff;
  padding:10px;
  margin-top:15px;
  border-radius:8px;
  display: flex;
  font-size:14px;
  & div {
    flex:1;
  }
    & p {
      margin:0;
      margin-top:15px;
      font-size:24px;
      font-weight:bold
      
    }
`
const Content = styled.div`
  margin-top:15px;
  background:white;
  padding:20px 10px;
  border-radius:8px;
  & div{
    display: flex;
    /* margin-top:15px; */
    padding:15px 0;
  }
  & p{
    color:#999;
  }
`
const Note = styled.span`
 flex:1;
 color:#999;
 margin-left:10px;
`

const Scroll = styled.div`
overflow-y:scroll;
/* height:80vh; */
flex:1;
padding:0 16px;
margin-top:15px;
padding-bottom:30px;
`

const Button = styled.button`
    position:absolute;
    right:15px;
    bottom:10px;
    height:40px;
    width:40px;
    padding:15px;
    border-radius:50%;
    border:none;
    background:rgb(16,108,255);
    color:white;
    font-size:22px;
    line-height:13px;
    font-weight:bold;
    text-align:center;
    box-shadow:0 0 10px #999;
`

const Display = styled.div`
  position:absolute;
  z-index:10;
  top:0;
  width:100%;
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
  background:rgba(0,0,0,0.5);
`

const Icon = styled.span`
  background:#e6f7ff;
  padding:8px;
  margin-right:5px;
  border-radius:8px;
`
export {Flex,Wrapper,Title,BackGround,Total,Content,Note,Scroll,Button,Display,Icon}