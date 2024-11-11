import { List } from '~/components/List'

export function Home() {
  return (
    <List.Root id="todo">
      <List.Header />
      <List.Content />
    </List.Root>
  )
}
