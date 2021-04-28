import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
// import Icon from 'components/Icon'


const NavWrapper = styled.div`
  box-shadow:0 0 10px #bebebe;
  position: relative;
  >ul {
    display:flex;
    >li{
      width:33.33%;
      text-align:center;
      padding:16px;
      > a{
          icon{

          }
          &.selected{
              color:red;
              .icon{
                  fill:red
              }
          }
      }
    }
  }
`



const Nav = () => {
   
    return (
        <NavWrapper>
            <ul>
                {/* <li>
                    <NavLink activeClassName="selected" to="/tags">标签页</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/money">记账页</NavLink>
                </li> */}
                <li>
                    <NavLink activeClassName="selected" to="/statistics">统计页</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav