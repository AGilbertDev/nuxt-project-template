// A pure rule both sides can import, and the one thing the sample test covers.
// Delete it with its test once the project has real logic of its own.

export type PartOfDay = 'morning' | 'afternoon' | 'evening'

/** The part of the day a given hour falls in, in the twenty-four hour clock. */
export function partOfDay(hour: number): PartOfDay {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new RangeError(`hour must be an integer between 0 and 23, received ${hour}`)
  }
  if (hour < 12) return 'morning'
  if (hour < 18) return 'afternoon'
  return 'evening'
}
