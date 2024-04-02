import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useSubimitStepOne from './useSubimitStepOne';

const schema = z.object({
    nomeEmpresa: z.string().min(1, { message: 'Required' }),
    quantTrabalhadores: z.number(),
    sobreNegocio: z.string().min(1, { message: 'Required' }),
});
export type FormValues = z.infer<typeof schema>;
export default function useHookFormStepOne() {

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit = useSubimitStepOne(form)

    return { form, onSubmit }
}
