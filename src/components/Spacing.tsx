interface Props {
  direction?: 'row' | 'column';
  size: number;
}

export function Spacing({ direction = 'column', size }: Props) {
  return (
    <div
      style={{
        width: direction === 'row' ? size : undefined,
        height: direction === 'column' ? size : undefined,
      }}
    />
  );
}
