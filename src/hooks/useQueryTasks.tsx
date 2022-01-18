import { useQuery } from 'react-query'
import axios from 'axios'
import { Task } from '@/types/types'

const getTasks = async () => {
  const { data } = await axios.get<Task[]>('http://127.0.0.1:8000/api/tasks/')
  return data
}

export const useQueryTasks = () => {
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    // このクエリを使用しているコンポーネントがアンマウントしてから指定秒数後にキャッシュを削除する
    cacheTime: 10000,
    staleTime: 10000,
  })
}
