import { useState } from 'preact/hooks'
import { LuMinus } from 'react-icons/lu'
import tallyZero from './assets/tallyZero.svg'
import tallyOne from './assets/tallyOne.svg'
import tallyTwo from './assets/tallyTwo.svg'
import tallyThree from './assets/tallyThree.svg'
import tallyFour from './assets/tallyFour.svg'
import tallyFive from './assets/tallyFive.svg'

const setsDecorator = (reps: number) => {
  const icons = [tallyZero, tallyOne, tallyTwo, tallyThree, tallyFour, tallyFive]

  return icons[reps] || icons[5]
}

interface SectionProps {
  name: string
  weight: number
  setPlan: number
  repPlan: number
}

export const Lift = ({ name, weight, setPlan, repPlan }: SectionProps) => {
  const [sets, setSets] = useState(0)

  const incrementReps = () => {
    if (sets >= 15) return

    setSets((sets) => sets + 1)
  }

  const decrementReps = () => {
    if (sets <= 0) return

    setSets(sets => sets - 1)
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
            <div className="text-xl">{weight}kg {setPlan}x{repPlan}</div>
          </div>
          <div className="w-full"></div>
        </div>

        <button className="w-full" onClick={incrementReps}>
          <div className="h-20 w-full pt-2 flex justify-center">
            <img src={setsDecorator(sets)} class="logo" alt="Vite logo" />
            {sets > 5 && <img src={setsDecorator(sets - 5)} class="logo" alt="Vite logo" />}
            {sets > 10 && <img src={setsDecorator(sets - 10)} class="logo" alt="Vite logo" />}
          </div>
        </button>
      </div>
    </section>
  )
}
