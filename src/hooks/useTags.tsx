import { useUpdate } from 'hooks/useUpdate';
import { createId } from 'lib/createId';
import { useEffect, useState } from 'react';

const useTags = ()=>{
  const [tags,setTags] = useState<{id:number,name:string,icon:string}[]>
  ([])
  useEffect(()=>{
    let _tags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if(_tags.length === 0 ){
      _tags = [
        {id:createId(),name:'消费',icon:'SkinTwoTone'},
        {id:createId(),name:'美食',icon:'SmileTwoTone'},
        {id:createId(),name:'住宿',icon:'BankTwoTone'},
        {id:createId(),name:'交通',icon:'CarTwoTone'},
        {id:createId(),name:'收入',icon:'DollarCircleTwoTone'},

      ]
    }
    setTags(_tags)
  },[])


  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },[tags])

  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id:number) =>{
    let result = -1
    for(let i=0;i<tags.length;i++){
      if(tags[i].id === id){
        result = i
        break;
      }
    }
    return result
  }
  const updateTag = (id:number,obj:{name:string}) => {
    // setTags(tags.map(tag=>tag.id ===id ?{id,name:obj.name}:tag) )
  }

  const deleteTag = (id:number) =>{
    setTags(tags.filter(tag=> tag.id !== id))
  }
  const addTag = ()=>{
    const tagName = window.prompt('新标签名称为');
    if(tagName !== null && tagName!== ''){
      // setTags([...tags,{id:createId(),name:tagName}])
    }
  }

  const getName = (id:number)=>{
    const tag = tags.filter(t=>t.id===id)[0]
    return tag? tag.name :''
  }

  const getIcon = (id:number)=>{
    const tag = tags.filter(t=>t.id===id)[0]
    return tag? tag.icon :''
  }
    return {tags,setTags,findTag,findTagIndex,updateTag,deleteTag,addTag,getName,getIcon}
}

export {useTags}