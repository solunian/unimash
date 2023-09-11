export function sortColleges(colleges: College[]) {}

export function get_two_random_colleges(colleges: College[]) {
  const idx1 = Math.floor(Math.random() * colleges.length);
  const first_uni = <College>(<unknown>colleges[idx1]);
  colleges.splice(idx1, 1);

  const second_uni = <College>(<unknown>colleges[Math.floor(Math.random() * colleges.length)]);

  return [first_uni, second_uni]; // tuple destructuring!
}
