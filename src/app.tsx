import { Lift } from './Lift'

export function App() {

  const liftData = [
    {
      name: 'Bench',
      weightKg: '80',
      setPlan: '3',
      repPlan: '8'
    },
    {
      name: 'Row',
      weightKg: '80',
      setPlan: '3',
      repPlan: '8'
    },
    {
      name: 'Squat',
      weightKg: '120',
      setPlan: '3',
      repPlan: '8'
    },
    {
      name: 'Overhead triceps',
      weightKg: '10',
      setPlan: '3',
      repPlan: '12'
    },
  ]

  return (
    <>
      <header className="p-4 flex justify-center bg-orange-400 font-bold text-white">
        <h1 className="text-2xl">Bench day</h1>
      </header>
      {liftData.map((lift, index) => (
        <div className={((index % 2) !== 0) ? "bg-orange-50" : "bg-orange-100"}>
          <Lift
            name={lift.name}
            weight={lift.weightKg}
            setPlan={lift.setPlan}
            repPlan={lift.repPlan}
          />
        </div>
      ))}
    </>
  )
}
