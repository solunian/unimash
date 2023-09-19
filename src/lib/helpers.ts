// using USCF K-factor -> https://en.wikipedia.org/wiki/Elo_rating_system#Theory
// "The maximum possible adjustment per game, called the K-factor..."
function get_k_factor(score: number) {
  if (score < 2100) {
    return 32;
  } else if (score < 2400) {
    return 24;
  } else {
    return 16;
  }
}

// comparing with elo system! no draws though
// returns the change in rating in each respective college
// prevent race condition with setting rating in mongo?
export function compare_colleges(uni_a: College, uni_b: College, uni_a_won: boolean) {
  const [Ra, Rb] = [uni_a.rating, uni_b.rating]; // current ratings

  const Ea = 1.0 / (1 + Math.pow(10, (Rb - Ra) / 400.0)); // expected score for a
  const Eb = 1.0 / (1 + Math.pow(10, (Ra - Rb) / 400.0)); // expected score for a

  const [Ka, Kb] = [get_k_factor(Ra), get_k_factor(Rb)];

  // actual score -> win = 1, lose = 0
  const Sa = (uni_a_won) ? 1 : 0;
  const Sb = (!uni_a_won) ? 1 : 0;

  // new ratings
  // Ra = Ra + Ka * (Sa - Ea); 
  // Rb = Rb + Kb * (Sb - Eb);

  // change in ratings
  const dRa = Ka * (Sa - Ea);
  const dRb = Kb * (Sb - Eb);

  return [dRa, dRb];
}

// sorts in-place, but also return reference to array
export function sort_colleges(colleges: College[]) {
  return colleges.sort((a, b) => a.rating - b.rating);
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
