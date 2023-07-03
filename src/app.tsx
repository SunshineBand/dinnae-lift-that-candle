import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { Lift } from './Lift'
import { LuPlus } from 'react-icons/lu'

type Lift = {
  name: string
  weightKg: number
  setPlan: number
  repPlan: number
}

const liftData: Lift[] = [
  {
    name: 'Bench',
    weightKg: 80,
    setPlan: 3,
    repPlan: 8
  },
  {
    name: 'Row',
    weightKg: 80,
    setPlan: 3,
    repPlan: 8
  },
  {
    name: 'Squat',
    weightKg: 120,
    setPlan: 3,
    repPlan: 8
  },
  {
    name: 'Overhead triceps',
    weightKg: 10,
    setPlan: 3,
    repPlan: 12
  },
]

export function App() {
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      lifts: liftData
    }
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'lifts'
  })

  const onSubmit: SubmitHandler<{ lifts: Lift[]; }> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header className="p-4 flex justify-center bg-orange-400 font-bold text-white">
        <h1 className="text-2xl">Bench day</h1>
      </header>
      {fields.map((lift, index) => (
        <div className={((index % 2) !== 0) ? "bg-orange-50" : "bg-orange-100"}>
          <Lift
            name={lift.name}
            weight={lift.weightKg}
            setPlan={lift.setPlan}
            repPlan={lift.repPlan}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: 'Bench', weightKg: 80, setPlan: 11, repPlan: 4 })}
        className="bg-orange-300 text-white text-xl italic h-20 w-full flex justify-center items-center"
      >
        add a lift
        <LuPlus className="ml-2" />
      </button>
    </form>
  )
}
