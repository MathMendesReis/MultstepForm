import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { FormValues } from './useHookFormStepOne'
import useStepController from './step-controlled'
import { useNavigate } from "react-router-dom";



export default function useSubimitStepOne(form: UseFormReturn<FormValues>) {
    const { handleStep, currentStep } = useStepController()
    const navigate = useNavigate();
    return React.useCallback((values: FormValues) => {
        console.table(values)
        handleStep()
        navigate("/empresa");
    }, [form, handleStep, currentStep])
}
