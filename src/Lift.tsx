import { useState } from 'preact/hooks'
import { LuMinus } from 'react-icons/lu'
import tallyZero from './assets/tallyZero.svg'
import tallyOne from './assets/tallyOne.svg'
import tallyTwo from './assets/tallyTwo.svg'
import tallyThree from './assets/tallyThree.svg'
import tallyFour from './assets/tallyFour.svg'
import tallyFive from './assets/tallyFive.svg'
import { UseFieldArrayUpdate, useForm } from 'react-hook-form'
import { TLift } from './app'

const setsDecorator = (reps: number) => {
  const icons = [tallyZero, tallyOne, tallyTwo, tallyThree, tallyFour, tallyFive]

  return icons[reps] || icons[5]
}

interface LiftFormProps {
  name: string
  index: number
  setPlan: number
  repPlan: number
  weightKg: number
  onStopEdit: () => void
  updateLift: UseFieldArrayUpdate<{ lifts: TLift[] }>
}

const LiftForm = ({ name, weightKg, setPlan, repPlan, index, onStopEdit, updateLift }: LiftFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: name,
      weightKg: weightKg,
      setPlan: setPlan,
      repPlan: repPlan
    }
  })

  const onSubmit = (data: any) => {
    onStopEdit()
    updateLift(index, data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-36">
      <p>I am being edited</p>
      <input
        key={name + index}
        {...register(`name`)}
      />
      <input
        key={weightKg + index}
        {...register(`weightKg`)}
      />
      <input
        key={setPlan + index}
        {...register(`setPlan`)}
      />
      <input
        key={repPlan + index}
        {...register(`repPlan`)}
      />
      <button type="button" onClick={handleSubmit(onSubmit)}>
        submit
      </button>
    </form>
  )
}

interface SectionProps {
  name: string
  weight: number
  setPlan: number
  repPlan: number
  index: number
  updateLift: UseFieldArrayUpdate<{ lifts: TLift[] }>
}

export const Lift = ({ name, weight, setPlan, repPlan, index, updateLift }: SectionProps) => {
  const [sets, setSets] = useState(0)
  const [editing, setEditing] = useState(false)

  if (editing) {
    return <LiftForm
      name={name}
      weightKg={weight}
      setPlan={setPlan}
      repPlan={repPlan}
      index={index}
      updateLift={updateLift}
      onStopEdit={() => setEditing(false)}
    />
  }

  const incrementReps = () => {
    if (sets >= 15) return

    setSets((sets) => sets + 1)
  }

  const decrementReps = () => {
    if (sets <= 0) return

    setSets(sets => sets - 1)
  }

  return (
    <section className="h-36 flex flex-col items-center">
      <div className="w-full">
        <div className="flex justify-around">
          <button type="button" onClick={decrementReps} className="w-full flex justify-center items-center">
            <LuMinus className="mr-0"/>
          </button>
          <button className="w-full text-center" onClick={() => setEditing(true)}>
            <div className="text-xl">{name}</div>
            <div className="text-xl">{weight}kg {setPlan}x{repPlan}</div>
          </button>
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
