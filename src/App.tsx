import { Outlet } from 'react-router-dom'
import Check from './icons/check'
import useStepController from './components/step-controlled'

export default function App() {
  const steps = ['contato', 'empresa', 'projeto']
  const { currentStep } = useStepController()
  return (
    <main className='max-w-[90rem] min-h-screen mx-auto px-2 py-1 flex items-center justify-center'>
      <section className='min-h-[36.75rem] max-w-[37rem] w-full'>

        <div className='flex justify-around'>
          {steps.map((item, index) => {
            const step = currentStep !== null && index < currentStep
            return (
              <div key={new Date().getTime() * Math.random()} className='flex items-center justify-center gap-2'>
                <div
                  className={`${step ? 'bg-[#1D8841]' : 'bg-[#633BBC] text-neutral-100 font-extrabold'} size-7	flex items-center justify-center rounded-full`}>
                  {step ? <Check /> : <p>{index + 1}</p>}
                </div>
                <p className='antialiased text-zinc-950 font-bold text-3xl capitalize'> {item}</p>
              </div>
            )
          })}
        </div>
        <Outlet />

      </section>
    </main >
  )
}