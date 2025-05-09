'use client';

import { buildContext } from '@toss/react';

interface InputContext {
  error: boolean;
  active: boolean;
  readOnly: boolean;
}

export const [InputContextProvider, useInputContext] = buildContext<InputContext>('Input');
