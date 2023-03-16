import { IData } from "../interfaces/IDataApi"

export function readJson() {
  const file = require('../data/sermons.json')
  const formatFile = file.reduce((acc: any, curr: IData, index: number) => {
    if(curr.audio === '') return acc
    return [
      ...acc,
      {
        ...curr,
        id: index
      }
    ]
}, [])
  return formatFile
}