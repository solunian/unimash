export function sortColleges(colleges: College[]) {
  colleges.sort((a, b) => a.rating - b.rating);
}

export function get_two_random_colleges(colleges: College[]) {
  let mut_colleges = [...colleges]; // clone array in order not to mutate parameter
  const idx1 = Math.floor(Math.random() * mut_colleges.length);
  const first_uni = <College>(<unknown>mut_colleges[idx1]);
  mut_colleges.splice(idx1, 1);

  const second_uni = <College>(
    (<unknown>mut_colleges[Math.floor(Math.random() * mut_colleges.length)])
  );

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
