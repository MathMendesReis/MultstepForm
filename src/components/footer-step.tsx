import useStepController from "./step-controlled"

export default function FooterStep() {
    const { handlePreviousStep } = useStepController()

    return (
        <div className='flex justify-between'>
            <button
                type="button"
                onClick={handlePreviousStep}
                className='max-w-40 w-full  border-[2px] border-[#633BBC] min-h-14 rounded-md'>
                <span className='text-[#633BBC] font-extrabold text-xl'>voltar</span>
            </button>
            <button
                type="submit"
                className='max-w-40 w-full bg-[#633BBC] min-h-14 rounded-md'>
                <span className='text-neutral-100 font-extrabold text-xl'>continuar</span>
            </button>
        </div>
    )
}
