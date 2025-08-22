type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | Record<string, boolean>
  | Array<string | number | null | false | undefined | Record<string, boolean>>;

export function cn(...inputs: ClassValue[]) {
  return inputs
    .flatMap((value) => {
      if (typeof value === "string") return value;
      if (Array.isArray(value)) return value;
      if (value && typeof value === "object") return Object.keys(value).filter((k) => (value as any)[k]);
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
