import { ComponentPropsWithoutRef, ElementType, Ref, forwardRef } from 'react';

type PolymorphicComponentPropsWithRef<Props, Tag extends ElementType> = (
  props: ComponentPropsWithoutRef<Tag> & Props & { as?: Tag },
  ref: Ref<any>,
) => JSX.Element;

export function forwardRefWithAs<Props, Tag extends ElementType>(
  component: PolymorphicComponentPropsWithRef<Props, Tag>,
) {
  return forwardRef(component);
}
