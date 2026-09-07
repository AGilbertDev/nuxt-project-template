import { describe, expect, it } from 'vitest'

import { partOfDay } from '#shared/greeting'

// The sample the template ships with, so a clone runs green and the pull
// request report has something to measure on its first run.
describe('partOfDay', () => {
  it.each([
    [0, 'morning'],
    [11, 'morning'],
    [12, 'afternoon'],
    [17, 'afternoon'],
    [18, 'evening'],
    [23, 'evening']
  ])('calls hour %i the %s', (hour, expected) => {
    expect(partOfDay(hour)).toBe(expected)
  })

  it.each([-1, 24, 9.5, Number.NaN])('rejects %s', (hour) => {
    expect(() => partOfDay(hour)).toThrow(RangeError)
  })
})
