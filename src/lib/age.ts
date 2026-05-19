const BIRTH_YEAR = 2003;
const STARTED_CODING_AT_AGE = 10;
const STARTED_WORKING_YEAR = 2021;

export function yearsSince(year: number, now = new Date()): number {
  return now.getFullYear() - year;
}

export function age(now = new Date()): number {
  return yearsSince(BIRTH_YEAR, now);
}

export function yearsCoding(now = new Date()): number {
  return yearsSince(BIRTH_YEAR + STARTED_CODING_AT_AGE, now);
}

export function yearsWorking(now = new Date()): number {
  return yearsSince(STARTED_WORKING_YEAR, now);
}
