import React from 'react'
import '@/App.css'
import { Layout } from '@/components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClassicalFetchA } from '@/components/ClassicalFetchA'
import { ClassicalFetchB } from '@/components/ClassicalFetchB'
import { StateProvider } from '@/context/StateProvider'
import { ReactQueryA } from '@/components/ReactQueryA'
import { ReactQueryB } from '@/components/ReactQueryB'
import { MainContext } from '@/components/MainContext'
import { MainRTKit } from '@/components/MainRTKit'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // デフォルトでは3回トライ
      retry: false,
      // ユーザーがブラウザにフォーカスを当てた時にフェッチする
      refetchOnWindowFocus: true,
    },
  },
})

const App: React.VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ReactQueryA />} />
              <Route path="/query-b" element={<ReactQueryB />} />
              <Route path="/main-context" element={<MainRTKit />} />
              <Route path="/main-rtkit" element={<MainContext />} />
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
