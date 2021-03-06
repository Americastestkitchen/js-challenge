This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the dependencies
```
yarn
```

Start the server
```
yarn dev
```

## Read the documentation
* https://www.openbrewerydb.org/documentation
* https://nextjs.org/docs
* https://swr.vercel.app/docs/getting-started
* https://styled-components.com/docs
* https://reactjs.org/docs/hooks-overview.html

## Project Overview

This application has a few basic pages which display data from the Open Brewery Database API. The Home page, Search page and Brewery Detail page represent a typical information hierarchy which exists on many sites. Your task is to fix a few bugs, add some features and clean up this version of the application.

Below are several tasks from which you can choose. _**Please choose at least 4 of these tasks.**_ Spend no more than 4 hours on this coding challenge.

## Challenges
### EASIER CHALLENGES
* CHALLENGE 1: Accessibility
  * Use what you know about A11Y to find and fix potential A11Y issues throughout the site
* CHALLENGE 2: Testing
  * There is one very basic test in this project and that's pretty terrible. Provide additional test coverage for untested components.
  * Use any library or setup you are prefer
  * Can you mock network requests?
  * Can you simulate user interactions?
* CHALLENGE 3: General Cleanup
  * Several components render data that's sometimes `null`.
  * Suppress any empty DOM nodes or, provide a sensible default
  * Styles
    * The current app isn't exactly hard on the eyes but it's not a work of art either.
    * Enhance the visual display of the application - get creative. Use maps, data formatting, placeholder images, etc. Spruce it up a little!
  * Error handling (timeouts, try/catch, etc). This app is pretty darn optimistic at the moment. Introduce some better error handling to account for the unpredictable nature of the web.
* CHALLENGE 4: Search loading state
  * Most sites include a 'loading' or skeleton component while data populates
  * Create a nice loading state for the results grid.
  * Note: we're looking for more than a fancy spinner here. An acceptable solution would include placeholder components for the grid and cards while the component is in a loading state.
* CHALLENGE 5: Search page pagination
  * create a basic pagination controls to move between paged recordsets

### MEDIUM CHALLENGES
* CHALLENGE 6: Search Autocomplete in the site header
  * The results presented should link directly to the brewery detail page.
  * Hitting enter on the form should **route** the user to the brewery search page.
  * Pay special attention to performance and accessibility
* CHALLENGE 7: Index page brewery type browsing controls
  * The Brewery API allows easy filtering by [Brewery Type](https://www.openbrewerydb.org/documentation/01-listbreweries).
  * Add filter controls to the index page (and search page if you want)
  * Pay attention to performance and A11Y
* CHALLENGE 8: Index page grid geolocation
  * The featured brewery on the home page uses a popular geolocation hook. Expand the use of this hook so the user's location can be easily used in other components by using Context.
  * Provide a fallback location in the event a user declines sharing their location.
* CHALLENGE 9: Newsletter component
  * Flex your css skills by adding a FLEXIBLE newletter component on the index page so users can get breweries in their inbox.
  * The component should match the image and styling in the public folder.
  * Use styled-components to complete this task.
  * The newsletter should take in props the Heading and submit button text, then require and verify props within the component.
  * The "how we use your email" link should display a popup message when a user clicks on it. The text shown is at your discretion.
  * Please keep Accessbility in mind when creating the component.
  * A confirmation message should replace the form when a user submits a valid email. If the email is not valid, display an error message.

### HARDER CHALLENGES
* CHALLENGE 10: Convert components/FeaturedBrewery file to Typescript
  * The basic addition of adding typescript to a nextjs app has been done already. In this challenge you will convert a single file to full type safety.
  * The use-position hook has an outdated DefinatelyTyped entry, update this entry locally using correct and more accurate typings and keep existing documentation.
  * The styled components and theme needs typings, add these to the project.
  * Finally, the v3 preview of styled-components-breakpoint is written in Typescript. Update the breakpoint usage to be type safe.
* CHALLENGE 11: Custom server with basic authentication
  * Our senior leadership has requested that we add basic authentication to the app when we're not in production.
  * While this can be added in many ways, we want to see if you can create a custom server implementation using Express or Fastify.
  * Create ENV variables that enable or disable basic authentication and use them to protect this glorious application from public scrutiny.



## Final Instructions
* Please have no more than one commit per task. If you would like to commit more frequently along the way, that's fine but please squash your commits.
* Label your commit message based on the challenge id.
  * For Example: `CHALLENGE2 - adding tests for components x, y, z`
* Candidates applying for non senior (Senior Software Engineer or Lead Software Engineer) positions should choose at least one task from the Easier and Medium challenges and can optionally choose to complete one or more Harder challenge. 
* **_Senior candidates are required to complete at least one of the Harder challenges._**
* Some candidates choose to spend more time than 4 hours on this challenge. This is neither required nor expected. However, if you choose to do so, please label any commits that occur after the 4hr limit as `BONUS: CHALLENGE X...` so that it is easy to see at a glance where the bonus work started.

If you have questions along the way, please email jason.aslakson@americastestkitchen.com

Have fun with the exercise and don't feel too much pressure
