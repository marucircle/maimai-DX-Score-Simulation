---
to: components/<%= name %>.tsx
unless_exists: true
---
export type <%= name %>Props =  {
  purpose?: string;
}

export const <%= name %> = ({ purpose }: <%= name %>Props) => {
  return (
    <div>
    test
    </div>
  );
};