import { Title } from './components/Title'
import { Description } from './components/Description'
import { Button } from './components/ui/button'

export function App() {

  return (
    <>
    <Title value='Hello World!' />
    <Description value='Its my first page!' />
    <Button variant={'outline'}>Default</Button>
    <Button variant={'secondary'}>Secondary</Button>
    <Button variant={'destructive'}>Destructive</Button>
    </>
  )
}