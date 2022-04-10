import React from 'react'
import { useSwrQuery } from './hooks/useSwrQuery'
import Header from './components/Header'
import { useSWRConfig } from 'swr'

function App() {
  const [data, isLoading, isError, mutate] = useSwrQuery(
    'https://api.github.com/users/supreetsingh247'
  )

  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  // render data
  return (
    <div>
      <>
        <Header />
        <p>Company: {data.company}</p>
      </>
      <button
        onClick={async () => {
          mutate({ ...data, name: 'ozan' }, false)
        }}>
        change name
      </button>
    </div>
  )
}

export default App
