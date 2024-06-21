import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRecents } from "../interfaces/IRecents";

interface IProgressPosition {
  id: string;
  "pt-br"?: number;
  "en-us"?: number;
}

export async function getStorage(id?: string) {
  const storage = await AsyncStorage.getItem("@awmb-progress");
  // await AsyncStorage.removeItem('@awmb-progress')
  const storageParsed: Array<IProgressPosition> = storage
    ? JSON.parse(storage)
    : [];

  if (id) {
    return storageParsed.filter((item) => item.id === id);
  }
  return storageParsed;
}

export async function setStorage(data: IProgressPosition) {
  const storage: Array<IProgressPosition> = await getStorage();

  if (storage.length === 0) {
    await AsyncStorage.setItem("@awmb-progress", JSON.stringify([data]));
    return;
  }

  const currentData = storage.some((item) => item.id === data.id);

  const newStorage = storage.map((item) => {
    if (item.id === data.id) {
      return {
        id: item.id,
        "pt-br": data["pt-br"] ? data["pt-br"] : item["pt-br"],
        "en-us": data["en-us"] ? data["en-us"] : item["en-us"],
      };
    }
    return item;
  });

  const saveStorage = currentData ? newStorage : [...newStorage, data];

  await AsyncStorage.setItem("@awmb-progress", JSON.stringify(saveStorage));
}
