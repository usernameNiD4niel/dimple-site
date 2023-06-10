import { create } from "zustand";

type State = {
    focus: string
}

type Action = {
    updateFocus: (focus: State['focus']) => void;
}

const useStore = create<State & Action>((set) => ({
    focus: '',
    updateFocus: (focus) => set(() => ({focus: focus}))
}))

export default useStore;