import { Lift } from './Lift'

export function App() {

  return (
    <>
      <header className="p-4 flex justify-center bg-orange-400 font-bold text-white">
        <h1 className="text-2xl">Bench day</h1>
      </header>
      <div className="bg-orange-50">
        <Lift name={"Bench"}/>
      </div>
      <div className="bg-orange-100">
        <Lift name={"Row"} />
      </div>
      <div className="bg-orange-50">
        <Lift name={"Squat"}/>
      </div>
      <div className="bg-orange-100">
        <Lift name={"Overhead Triceps"}/>
      </div>
    </>
  )
}
