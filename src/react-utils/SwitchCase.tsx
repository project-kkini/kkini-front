import { ReactNode } from 'react';

interface SwitchCaseProps<T extends string | number> {
  value: T;
  caseBy: Partial<Record<T, ReactNode | null>>;
  defaultComponent?: ReactNode | null;
}

export const SwitchCase = <T extends string | number>({ value, caseBy, defaultComponent = null }: SwitchCaseProps<T>) => {
  return caseBy[value] ?? defaultComponent;
};
