'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error, isLoading } = useSWR('/api/hello', fetcher, { revalidateOnFocus: false })

  if (error) return <div className="min-h-screen flex items-center justify-center text-2xl">请求出错</div>
  if (isLoading) return <div className="min-h-screen flex items-center justify-center text-2xl">加载中...</div>

  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      {data?.message}
    </div>
  )
}
