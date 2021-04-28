import Layout from "components/Layout";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "hooks/useTags";
import { Button } from "components/Button";
import { Center } from "components/Center";

const TagList = styled.ol`
  >li{
    border-bottom:1px solid #e6e6e6;
    margin-left:16px;
    display: flex;
    >a{
      padding:10px 16px 10px 0;
      flex:1
    }
  }
`


function Tags() {
  const { tags,addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id} >
            <Link to={'/tags/' + tag.id}>
              <span>{tag.name}</span>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button  onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  )
}
export default Tags; 

