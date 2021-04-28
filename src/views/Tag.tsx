import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import React from "react";
import { useParams,useHistory } from "react-router";
import styled from "styled-components";
import { useTags } from "hooks/useTags";

type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content:space-between;
  line-height:20px;
  padding:14px;
`

const Wrapper = styled.div`
  padding:0 14px;
`

const Tag = () => {
  const { findTag,updateTag,deleteTag } = useTags()
  let { id:idString } = useParams<Params>();
  const tag = findTag(parseInt(idString))
  const onClickBack = ()=>{
    history.goBack()
  } 
  const history = useHistory()
  if(tag){

  return (
    <Layout>
      <Topbar>
        {/* <Icon name=""></Icon> */}
        <span onClick={onClickBack}>返回</span>
        <span>编辑标签</span>
        <Icon name=""></Icon>
      </Topbar>
      <Wrapper>
        <Input label="标签名" 
        type="text" 
        placeholder="请输入标签名"
        value={tag.name}
        onChange={(e)=>{
          updateTag(tag.id,{name:e.target.value})
        }}
        ></Input>
      </Wrapper>
      <Center>
        <Button onClick={()=>deleteTag(tag.id) }>删除标签</Button>
      </Center>
    </Layout>
  )}
  else{
    return(
      <div>tag不存在</div>
    )
  }
}
export default Tag;