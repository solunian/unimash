# unimash

A joke website as **FaceMash for "uni"-versities**. The original FaceMash (created by
Mark Zuckerberg) was aggressively mean, but highly effective in stirring humans to their
primitive instincts of judgement; kinda sad how that works. **Do not re-create FaceMash or
disparagingly compare people by appearance; that would be absolutely awful. Don't be foolish.**

This is a somewhat satirical re-creation but also a fun exercise for creating dynamic
websites with an external database. Also, this website looks terrible on purpose!

Even though it has many innaccuracies, _The Social Network_ is a pretty epic movie, and
it helped inspire this project.

## Dev Notes

- SvelteKit and Tailwindcss: still the best web framework combo in my opinion
  - form actions and fetch/api is pretty easy with sveltekit!
  - not too much styling going on, but tailwind purges browser styling so everything is consistent
  - also tailwind is so much faster than writing css
- MongoDB
  - connecting with the node.js "driver" is pretty simple with sveltekit if you can figure it out at first
  - Document-based is so cool, kinda easier than relational
- Rating System
  - all start at 1500, using Elo rating system (no draws, only win/loss)
  - implemented in `src/lib/helpers.ts`, the math is kinda interesting
- Submitting Colleges
  - there is a password by using a sha256 hash in the server code!
    - probably not best practice but wtvr...
    - only doing this because some people I gave it to spammed the database with trolls
  - also there are restrictions on the name and url

### Old Notes

- Probably using this to test out mongoDB and storage buckets for images. (AWS?)
- Simple styling!!!! Thank goodness that CSS in 2003 was pretty awful
- I debugged setting up mongodb for two hours until I realized that I pasted the URI wrong
- using Wikipedia as the [Elo rating reference](https://en.wikipedia.org/wiki/Elo_rating_system#Theory) for pairwise comparisons
- yolo badge?
