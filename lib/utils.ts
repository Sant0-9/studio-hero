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
      if (value && typeof value === "object") {
        const record = value as Record<string, boolean>;
        return Object.keys(record).filter((k) => record[k]);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
