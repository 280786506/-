import React from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NotesSection } from "./Money/NotesSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";
import { useState } from 'react';
import { useRecords } from "hooks/useRecords";
import { useDisplayFormState } from "hooks/usedisplay";

import { DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';


import day from 'dayjs'

import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const MyLayout = styled.div`
  display: flex;
  flex-direction:column;
`
const Flex = styled.div`
display: flex;
background: #fff;
position:relative;
align-items:center;
  >.ant-picker{
    padding:4px 0 4px 15px;
  }
  >.anticon{
    margin-left:-20px;
    margin-right:10px;
    z-index:11;
  }
`

type Category = '-' | '+'
const _day: number = day().date()
const _month = day().month() + 1
const _year = day().year()
const currentDate = `${_year}/${_month}/${_day}`

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
  createdAt:currentDate,
}
function Money() {
  const [selected, setSelected] = useState(defaultFormData)

  const { addRecord } = useRecords()

  // Partial<typeof selected> 某个类型的部分类型
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const { setDisplay } = useDisplayFormState()
  const onOk = () => {
    const res = addRecord(selected)
    alert(res.msg)
    if (res.status === 1) {
      setSelected(defaultFormData)
      setTimeout(() => {
        setDisplay(false)
        window.location.reload()
      }, 50);
    }
  }


  const [open, setOpen] = useState<boolean>(false)

  const dateFormat = 'YYYY/MM/DD'
  const DatePickeronChange = (date:any,dateString:any) => {
    console.log(date,dateString)
    setSelected({
      ...selected,
      createdAt:dateString
    })
    setOpen(!open)
  }

  const openDatePicker = () => {
    setOpen(!open)
  }
  return (
    <MyLayout>
      <Flex>
          <DatePicker onChange={DatePickeronChange}
            inputReadOnly={true}
            locale={locale} bordered={false}
            format={dateFormat}
            defaultValue={moment(currentDate, dateFormat)}
            allowClear={false}
            open={open}
            suffixIcon='' />
        <DownOutlined onClick={openDatePicker} />

        <CategorySection value={selected.category}
          onChange={category => onChange({ category })} />
      </Flex>
      <TagsSection
        value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })}
      />

      <NotesSection value={selected.note}
        onChange={note => onChange({ note })}
      />

      <NumberPadSection
        value={selected.amount}
        onChange={amount => onChange({ amount })}
        onOK={onOk} />
    </MyLayout>
  )
}
export default Money;