import { IData } from "../interfaces/IDataApi"

export function readJson() {
  const file = require('../data/sermons.json')
  const formatFile = file.map((curr: IData, index: number) => ({
    ...curr,
    id: index
  }))
  return formatFile
}