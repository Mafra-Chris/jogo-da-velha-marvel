import { createAction, props } from '@ngrx/store';

export const readyPlayerX = createAction('[Player Component] ReadyX', props<{ isReadyX: boolean }>());
export const readyPlayerO = createAction('[Player Component] ReadyO', props<{ isReadyO: boolean }>());
export const incrementX = createAction('[Player Component] IncrementX');
export const incrementO = createAction('[Player Component] IncrementO');
export const setWinner = createAction('[Player Component] Winner', props<{ winner: "X" | "O" }>());