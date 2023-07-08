export interface StateType {
  keyDates: { birthDate: string; weddingDate: string };
  screenMode: number;
  name: string;
}

export const initialState: StateType = {
  keyDates: {
    birthDate: "",
    weddingDate: "",
  },
  screenMode: 0,
  name: "",
};
