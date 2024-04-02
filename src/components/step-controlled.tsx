import { create } from 'zustand';

type State = {
    currentStep: number | null,
    handleStep: () => void,
    handlePreviousStep: () => void,
}

const incrementStep = (state: State) => {
    if (state.currentStep === 3) {
        return state;
    }
    return { currentStep: state.currentStep === null ? 1 : state.currentStep + 1 }
}

const decrementStep = (state: State) => {
    if (state.currentStep === null) {
        return state;
    }
    if (state.currentStep === 0) {
        return { currentStep: null }
    }
    return { currentStep: state.currentStep - 1 }
}

const useStepController = create<State>((set) => ({
    currentStep: null,
    handleStep: () => set(incrementStep),
    handlePreviousStep: () => set(decrementStep),
}))

export default useStepController