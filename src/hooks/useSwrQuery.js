import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export const useSwrQuery = (url) => {
  const { data, error, mutate } = useSWR(url, fetcher)
  return [data, !error && !data, error, mutate]
}
