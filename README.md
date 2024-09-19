# Lizard Global React Developer Assessment

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

## Overview

The purpose of this assessment is to demonstrate:

1. An understanding of React syntax
2. Working with an API
3. Storing and manipulating React state
4. Structuring an application with multiple components
5. HTML and CSS ability
6. Responsive web development ability

### Prerequisites

In order to run the provided solution the following software will need to be installed:

- NodeJS (LTS) [here.](https://nodejs.org/en/)
- A code editor (We recommend VS Code [here.](https://code.visualstudio.com/))

### Setup

1. Fork and clone the repository
2. Open the repository folder and install the dependencies using `yarn` or `npm install`.
3. Run the development server using `yarn start` or `npm start`.

### Changes Made

1. Implemented data fetching from the mock API endpoint `/api/posts` using `fetch` within the `useEffect` hook. Added `useState` to create a state variable `posts` to store the fetched data. This handles asynchronous data retrieval and updates the component state.

2. Modified the component to render the `posts` data in a `<ul>` list. Each post is displayed with its title and, if available, `author.name`. Used `.map()` to iterate over the `posts` array and create a list item `<li>` for each post. Included conditional rendering for the `author` property to manage posts with or without an author.

# Authors 
* **GOUADFEL Rayan** _alias_ [@AirG213](https://github.com/AirG213)
