import { useState } from 'preact/hooks'
import { LuMinus } from 'react-icons/lu'
import tallyZero from './assets/tallyZero.svg'
import tallyOne from './assets/tallyOne.svg'
import tallyTwo from './assets/tallyTwo.svg'
import tallyThree from './assets/tallyThree.svg'
import tallyFour from './assets/tallyFour.svg'
import tallyFive from './assets/tallyFive.svg'

const repsDecorator = (reps: number) => {
  const icons = [tallyZero, tallyOne, tallyTwo, tallyThree, tallyFour, tallyFive]

  return icons[reps] || icons[5]
}

interface SectionProps {
  name: string
}

const Section = ({ name }: SectionProps) => {
  const [reps, setReps] = useState(0)

  const incrementReps = () => {
    if (reps >= 15) return

    setReps((reps) => reps + 1)
  }

  const decrementReps = () => {
    if (reps <= 0) return

    setReps(reps => reps - 1)
  }

  return (
    <section className="flex flex-col items-center">
      <div className="w-full">
        <div className="flex justify-around">
          <button type="button" onClick={decrementReps} className="w-full flex justify-center items-center">
            <LuMinus className="mr-0"/>
          </button>
          <div className="w-full text-center">
            <div className="text-xl">{name}</div>
            <div className="text-xl">80kg 5x5</div>
          </div>
          <div className="w-full"></div>
        </div>

        <button className="w-full" onClick={incrementReps}>
          <div className="h-20 w-full pt-2 flex justify-center">
            <img src={repsDecorator(reps)} class="logo" alt="Vite logo" />
            {reps > 5 && <img src={repsDecorator(reps - 5)} class="logo" alt="Vite logo" />}
            {reps > 10 && <img src={repsDecorator(reps - 10)} class="logo" alt="Vite logo" />}
          </div>
        </button>
      </div>
    </section>
  )
}

export function App() {

  return (
    <>
      <header className="p-4 flex justify-center bg-orange-400 font-bold text-white">
        <h1 className="text-2xl">Bench day</h1>
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
