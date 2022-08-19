import axios from './axios'

type Options = {
  handle?: boolean
}
type Res<T> = {
  code: number,
  message: string,
  result: T
}
export default <T, G = void>(url: string) => (body: G, options?: Options): Promise<T | Res<T>> => {
  return new Promise(resolve => {
    axios.post(url, body).then((res: any) => {
      if (options?.handle) return resolve(res as Res<T>)
      if (res.code === 200) return resolve(res.result as T)
    })
  })
}
