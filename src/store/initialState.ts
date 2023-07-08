// create initial state

export interface StateType {
  keyDates: { birthDate: string; weddingDate: string };
  screenMode: number;
}

export const initialState: StateType = {
  keyDates: {
    birthDate: "",
    weddingDate: "",
  },
  screenMode: 0,
};
