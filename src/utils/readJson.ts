import { IData } from "../interfaces/IDataApi"

export function readJson() {
  const file = require('../data/sermons.json')
  const formatFile = file.filter((curr: IData, index: number) => {
    if(curr.audio === '') return
    return {
    ...curr,
    id: index
  }})
  return formatFile
}