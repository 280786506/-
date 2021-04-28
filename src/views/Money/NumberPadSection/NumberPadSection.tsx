import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction:column;
  > .output{
    background:#fff;
    font-size:36px;
    line-height:72px;
    text-align:right;
    padding:0 16px;
    box-shadow:inset 0 5px 5px -5px rgba(0,0,0,0,0.25);
    border-top:5px solid #fcfcfc;

  }
  >.pad{
    > button{
      border:none;
      border:5px solid #fcfcfc;
      font-size:18px;
      float:left;
      width:25%;
      height:64px;
      background:#ffffff;
      &.ok{
        height:128px;
        float:right;
      }
      &.zero{
        width:50%;
      }
    }
  }
`
export { Wrapper }
