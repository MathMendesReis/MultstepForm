
import { Outlet } from 'react-router-dom';
import useHookFormStepOne from '../components/useHookFormStepOne';



export default function StepOne() {
    const { form, onSubmit } = useHookFormStepOne()

    return (
        <form
            className='max-w-[33rem] min-h-[20.5rem] mx-auto'
            action='/empresa'
            onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-1 my-2'>
                <p className='antialiased text-zinc-950 font-bold text-base capitalize'> Nome da empresa</p>
                <input {...form.register('nomeEmpresa')}
                    placeholder='Qual é o nome da empresa'
                    className='border border-neutral-400 w-full h-14 p-4 rounded-sm mt-1'
                />
                {form.formState.errors.nomeEmpresa && <p className='text-red-500'>{form.formState.errors.nomeEmpresa.message}</p>}
                <p className='antialiased text-zinc-950 font-bold text-base capitalize'>Número de funcionários</p>
                <input
                    className='border border-neutral-400 w-full h-14 p-4 rounded-sm mt-1'
                    placeholder='Digite o número de colaboradores'
                    type="number" {...form.register('quantTrabalhadores', { valueAsNumber: true })} />
                <p className='antialiased text-zinc-950 font-bold text-base capitalize'>Sobre seu negócio</p>
                {form.formState.errors.sobreNegocio && <p className='text-red-500'>{form.formState.errors.sobreNegocio.message}</p>}
                <input
                    className='border border-neutral-400 w-full h-14 p-4 rounded-sm mt-1'
                    placeholder='Fale um pouco sobre seus produtos ou serviços'
                    type="text" {...form.register('sobreNegocio')} />
                {form.formState.errors.sobreNegocio && <p className='text-red-500'>{form.formState.errors.sobreNegocio.message}</p>}
            </div>
            <Outlet />
        </form>

    )
}
