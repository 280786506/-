import Layout from "components/Layout";
import React, { useEffect, useState } from "react";
import { useRecords } from 'hooks/useRecords';
import { useTags } from "hooks/useTags";
import day from 'dayjs'
import Money from 'views/Money';
import { useDisplayFormState } from "hooks/usedisplay";
import { Wrapper, Title, BackGround, Total, Content, Note, Scroll, Button, Display, Flex, Icon } from "./Statistics/Statistics"


import { DatePicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

import { SkinTwoTone, BankTwoTone, SmileTwoTone, CarTwoTone, PlusSquareTwoTone, DollarCircleTwoTone } from '@ant-design/icons';

type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string // ISO 8601
}


function Statistics() {
  const { records } = useRecords()
  const { getName, getIcon } = useTags()
  let time: string[] = []
  // let newRecords: { date: string, list: RecordItem[] }[] = []
  const [newRecords, setNewRecords] = useState<{ date: string, list: RecordItem[] }[]>([])

  const decimal = (number: number) => {
    let numberString = JSON.stringify(number)
    if (numberString.indexOf('.') === -1) {
      return numberString += '.00'
    } else {
      const list = JSON.parse(JSON.stringify(numberString)).split('.')
      if (list[list.length - 1].length === 0) {
        return numberString += '00'
      }
      else if (list[list.length - 1].length === 1) {
        return numberString += '0'
      }
      else {
        return numberString
      }
    }
  }

  const recordMap = (year: string | number, month: string | number) => {
    let _income = 0
    let _expenditure = 0
    time = []
    let n: { date: string, list: RecordItem[] }[] = []
    records.map(r => {
      const Y: string = day(r.createdAt).format('YYYY')
      const M: string = day(r.createdAt).format('MM')

      if (Y == year && M == month) {
        const d: string = day(r.createdAt).format('YYYY年MM月DD日')
        const index = time.indexOf(d)
        if (index === -1) {
          time.push(d)
          let data = {
            date: d,
            list: [r]
          }
          n.push(data)
        } else {
          n[index].list.push(r)
        }

        if (r.category === '-') {
          _expenditure += r.amount
        } else {
          _income += r.amount
        }
      }
    })



    const newn = JSON.parse(JSON.stringify(n))

    newn.sort((a: any, b: any)=>{
      let A_Y = a.date.split('年')
      let B_Y = b.date.split('年')

      let A_M = A_Y[1].split('月')
      let B_M = B_Y[1].split('月')

      let A_D = A_M[1].split('日')
      let B_D = B_M[1].split('日')
      a['y'] = A_Y[0]
      a['m'] = A_M[0]
      a['d'] = A_D[0]

      b['y'] = B_Y[0]
      b['m'] = B_M[0]
      b['d'] = B_D[0]

       if (a.y === b.y) {

        if (a.m === b.m) {

          if (a.d === b.d) {

            return a.d - b.d

          } else {

              return b.d - a.d

          }

        } else {

          return b.m-a.m

        }

      } else {

        return b.y-a.y

      }

    })
    
    setNewRecords(newn)
    setIncome(decimal(_income))
    setExpenditure(decimal(_expenditure))
  }

  const listSort = (list: any[]) => {
    return list.sort((a: any, b: any) => {
      const A_Y = a.date.split('年')
      const B_Y = b.date.split('年')

      const A_M = A_Y[1].split('月')
      const B_M = B_Y[1].split('月')

      const A_D = A_M[1].split('日')
      const B_D = B_M[1].split('日')

      if (A_Y[0] === B_Y[0]) {//如果id相同，按照age的降序
        if (A_M[0] === B_M[0]) {
          if (A_D[0] === B_D[0]) {
            return b - a
          } else {
            console.log(A_D[0] ,B_D[0])
            if(A_D[0] > B_D[0]){
              console.log(5)
              return b-a
            }else{
              console.log(6)
              return a-b
            }
          }
        } else {
          return a-b
        }
      } else {
        return a-b
      }
      // const a_Y = a.date.split('年')
      // const b_Y = b.date.split('年')
    })
  }

  let { display, setDisplay } = useDisplayFormState()
  const add = () => {
    setDisplay(true)
  }

  const _day: number = day().date()
  const _month = day().month() + 1
  const _year = day().year()
  const currentDate = `${_year}/${_month}/${_day}`
  const [income, setIncome] = useState<any>('0') //本月收入
  const [expenditure, setExpenditure] = useState<any>('0') //本月支出
  const dateFormat = 'YYYY年MM月'

  useEffect(() => {
    recordMap(_year, _month)
  }, [records])

  const onChange = (date: any, dateString: any) => {
    const Y = JSON.parse(JSON.stringify(dateString)).split('年')
    const M = Y[1].split('月')[0]
    recordMap(Y[0], M)
    setOpen(false)
  }

  const [open, setOpen] = useState<boolean>(false)
  const openDatePicker = () => {
    setOpen(!open)
  }

  const components: any = {
    'SkinTwoTone': SkinTwoTone,
    'BankTwoTone': BankTwoTone,
    'SmileTwoTone': SmileTwoTone,
    'CarTwoTone': CarTwoTone,
    'DollarCircleTwoTone': DollarCircleTwoTone
  };
  const Story = (name: string) => {
    const SpecificStory = components[name];
    return <SpecificStory />;
  }


  return (
    <Layout>
      <Flex>
        <BackGround></BackGround>
        <Wrapper>
          <Title>记账本</Title>
          <DatePicker onChange={onChange}
            inputReadOnly={true}
            picker="month"
            locale={locale} bordered={false}
            format={dateFormat}
            defaultValue={moment(currentDate, dateFormat)}
            allowClear={false}
            open={open}
            suffixIcon='' />
          <DownOutlined onClick={openDatePicker} />
          <Total>
            <div>本月总支出
            <p>￥{expenditure}</p>
            </div>
            <div>本月总收入
            <p>￥{income}</p>
            </div>
          </Total>
        </Wrapper>
        <Button onClick={add}>+</Button>

        <Scroll>
          {
            newRecords.map(r => {
              return <Content key={r.date}>
                <p>{r.date}</p>
                {r.list.map((listItem, index) => {
                  return <div key={index}>
                    {listItem.tagIds.map(tagId => <span key={tagId}>
                      <Icon>{Story(getIcon(tagId))}</Icon>
                      {getName(tagId)}
                    </span>)}
                    <Note>{listItem.note}</Note>
                    {listItem.category} {decimal(listItem.amount)}
                  </div>
                })}
              </Content>
            })
          }
        </Scroll>

        {display &&
          <Display>
            <Money></Money>
          </Display>
        }


      </Flex>
    </Layout>
  )
}
export default Statistics;