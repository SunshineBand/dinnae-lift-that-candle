import { useState } from 'preact/hooks'
import tallyZero from './assets/tallyZero.svg'
import tallyOne from './assets/tallyOne.svg'
import tallyTwo from './assets/tallyTwo.svg'
import tallyThree from './assets/tallyThree.svg'
import tallyFour from './assets/tallyFour.svg'
import tallyFive from './assets/tallyFive.svg'

const repsDecorator = (reps: number) => {
  if (reps == 0) {
    return tallyZero
  } else if (reps == 1) {
    return tallyOne
  } else if (reps == 2) {
    return tallyTwo
  } else if (reps == 3) {
    return tallyThree
  } else if (reps == 4) {
    return tallyFour
  } else if (reps == 5) {
    return tallyFive
  } else {
    return tallyFive
  }
}

interface SectionProps {
  name: string
}

const Section = ({ name }: SectionProps) => {
  const [reps, setReps] = useState(0)

  return (
    <section className="flex flex-col items-center">
      <button onClick={() => setReps((reps) => reps + 1)}>
        <div className="text-xl">{name}</div>
        <div className="text-xl">80kg 5x5</div>

        <div className="h-20 w-full pt-2 flex justify-center">
          <img src={repsDecorator(reps)} class="logo" alt="Vite logo" />
          {reps > 5 && <img src={repsDecorator(reps - 5)} class="logo" alt="Vite logo" />}
        </div>
      </button>
    </section>
  )
}

export function App() {

  return (
    <>
      <header className="p-4 flex justify-center bg-orange-400 font-bold text-white">
        <h1 className="text-2xl">Clach cuid fir</h1>
      </header>
      <div className="bg-orange-50">
        <Section name={"Bench"}/>
      </div>
      <div className="bg-orange-100">
        <Section name={"Row"} />
      </div>
      <div className="bg-orange-50">
        <Section name={"Squat"}/>
      </div>
      <div className="bg-orange-100">
        <Section name={"Overhead Triceps"}/>
      </div>
    </>
  )
}
