export function sortColleges(colleges: College[]) {}

export function get_two_random_colleges(colleges: College[]) {
  const idx1 = Math.floor(Math.random() * colleges.length);
  const first_uni = <College>(<unknown>colleges[idx1]);
  colleges.splice(idx1, 1);

  const second_uni = <College>(<unknown>colleges[Math.floor(Math.random() * colleges.length)]);

  return [first_uni, second_uni]; // tuple destructuring!
}

export function is_formdata_valid(name: string, image: string) {
  // name: longer than one letter, capitalized
  // image: not an empty string, links to a https resource
  return (
    name.length > 1 &&
    name.charAt(0).match(/[A-Z]/) &&
    image.length > 0 &&
    image.startsWith("https://")
  );
}
