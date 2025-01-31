# README

## Setup

Run `yarn` in both `client` and `api`.
Then run `yarn start` in both.

## Design decisions

- Changed client to Typescript
- Moved dev dependencies to dev dependencies
- Fixed uses of index as a key when rendering lists of components
- Added in Tailwind

**Componentization**

- Created product-agnostic components that are rigged up with accessibility and functionality
  - Some use a context to pass around ids for accessibility. I used `use-context-selector`, which doesn't have the same re-render issues as React's context.
- `pages/app/components` composes those into components aware of business logic

**Fetching**

- Switched to react-query for easy loading and error states
- Chose to make /products just return a fully-composed model because I want all this info on intial render anyway (see note below)
  ```
  {
    characteristics: {
      colorClasses: string;
      id: string;
      name: string;
    }[];
    id: number;
    name: string;
    score: number;
  }
  ```

**Data model**

- Wrote out the db.json to represent many-to-many relationships between products and characterizations
- Added `colorClass` to the new characterizations model
  - Makes it easier to scan the page when each characterization has a consistent color
  - Keeping this design information on the backend is so we don't have to manually maintain a list of keys that both FE and BE know about.

**Accessibility**

- Added a skip to main link, because a likely scenario is this would have navigation links in its header and screenreader users should be able to bypass them
- Added interally-rigged labels for Group and Card so users have context
- Omitted attributes that would override the built-in accessibility of /components

## Performance considerations

- Added two in-memory caches (one for product info, one for characteristics filtering) to save on hitting `.filter` or extra BE requests

## What you would do differently

1. In a more data-heavy sitatuion, I'd have a better database to work with. This dataset is _barely_ relational, so I'd probably use a graph solution.
2. From a design perspective, I'd also want to add a search bar to filter products, as well as an input for filtering based on score.
3. I'd possibly make a play to rename "characteristics" to "tags"
   3a. That's how users will describe them
   3b. It'd be easier to onboard new hires by using more common terms
   3c. They don't grammatically play well as a "set" and are a bit free-form (e.g. "Vegan" vs "Wasteful").
   3d. Easier to type ;)
4. Would need much more robust caching and a solution for what to do when the cache becomes stale
