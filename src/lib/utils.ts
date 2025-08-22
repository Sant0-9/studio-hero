type ClassDictionary = Record<string, boolean | undefined | null>;
type ClassArray = Array<string | ClassDictionary | undefined | null | false>;
type ClassValue = string | ClassDictionary | ClassArray | undefined | null | false;

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flatMap((value) => {
      if (typeof value === 'string') return value.split(' ');
      if (Array.isArray(value)) return value as string[];
      if (value && typeof value === 'object') {
        return Object.entries(value)
          .filter(([, enabled]) => Boolean(enabled))
          .map(([className]) => className);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}
