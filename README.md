# Veritone React Coding Challenge

## Setup
1. Clone this repo
2. cd into the repository and run `npm run start`
5. Go to `http://localhost:3000` and enjoy the prototype!

## Summary
Write a little component in React, OrderedList, which implements an alphabetically sorted list.
The component will include a button to enable the user to sort either in ascending or descending order
and a second button to permit the list to be cleared.


### Example Photos and video



## Acceptance Criteria
The component should render specific elements according to the following specifications:
- An `<input class="add-item" />` element which the user can use to add items to the list. This input field should listen for Enter keydown events (the test suite triggers the onKeyDown event handler specifically) to add the current contents (if nonempty) to the list. After adding an item, the input box should be cleared.
- A `<button class="sort-direction">` element which the user can click to change the direction of the sort. Initially, the button should display text such as the ⬇️ emoji or the text down. When changed to a descending sort, the button should change to a ⬆️ emoji (or text such as up). The test suite will only test that pushing the sort-direction button toggles between two nonempty strings when clicked rather than checking that the string matches something in particular, so pick a string or icon that carries the most semantic meaning to you.
- A `<button class="clear-list">` element which the user can click to clear the list as well as any contents in the input box (essentially reverting to the component's default state). Use any text you'd like for this button.
- An `<ul class="items-list">` element, which should contain a series of <li> elements that represent the sorted list contents.


## contributors

[KimJ Manansala](https://github.com/KimjManansala)

