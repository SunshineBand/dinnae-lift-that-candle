import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="flex justify-center">Hello world</h1>
      <section>
        <article>
          <p>How many times must one count?</p>
          <p>They must count {count} times</p>
        </article>
      </section>
      <section>
        <button onClick={() => setCount((count) => count + 1)}>
          but the count is {count}
        </button>
      </section>
    </>
  )
}
