import styled from "styled-components"
import { useTags } from "hooks/useTags";
import { SkinTwoTone, BankTwoTone, SmileTwoTone, CarTwoTone, PlusSquareTwoTone,DollarCircleTwoTone } from '@ant-design/icons';



const Wrapper = styled.section`
  flex-grow:1;
  background:#fff;
  padding: 12px 16px;
  display: flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:flex-start;
  > ol{
    margin: 0 -16px;
    >li{
      background:#f1f1f1;
      border-radius:8px;
      display:inline-block;
      padding:5px 12px;
      margin:8px 9.5px;
      height:44px;
      color:rgb(24 144 255);
      text-align:center;
      > div{
        display: flex;
        flex-direction:column;
        align-items:center;
        > p{
          font-size:12px;
          /* margin-top:5px; */
        }
        >span{
          
        }
      }
      &.selected {
        background:#e6f7ff;
        color:rgb(24 ,144 255);
      }
    }
   
  }
  /* > button{
    background:none;
    border:none;
    margin-top:10px; 
  } */
`;
type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags()

  const selectedTagIds = props.value

  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId)
    console.log(index)

    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    } else {
      props.onChange([tagId])
    }
  }

  const isSelected = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''

  const components: any = {
    'SkinTwoTone': SkinTwoTone,
    'BankTwoTone': BankTwoTone,
    'SmileTwoTone': SmileTwoTone,
    'CarTwoTone': CarTwoTone,
    'DollarCircleTwoTone':DollarCircleTwoTone
  };
  const Story = (name: string) => {
    const SpecificStory = components[name];
    return <SpecificStory />;
  }

  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
            onClick={() => { onToggleTag(tag.id) }}
            className={isSelected(tag.id)}
            id={tag.id.toString()}
          >
            <div>
              <span>{Story(tag.icon)}</span>
              <p>{tag.name} </p>
            </div>

          </li>
        )}
        {/* <li onClick={addTag} >
          <div>
            <span>
              <PlusSquareTwoTone />
            </span>
            <span>加 </span>
          </div>
        </li> */}
      </ol>
    </Wrapper>
  )
}

export { TagsSection }