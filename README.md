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

<img width="353" alt="Screen Shot 2021-07-31 at 11 37 53 AM" src="https://user-images.githubusercontent.com/40606399/127745061-7a0c65f6-2c39-4f85-ac71-6edaa2a4dc73.png">
<img width="323" alt="Screen Shot 2021-07-31 at 11 38 22 AM" src="https://user-images.githubusercontent.com/40606399/127745068-a6264894-fcd5-4cb8-90b3-7a5965d17aea.png">
<img width="286" alt="Screen Shot 2021-07-31 at 11 38 19 AM" src="https://user-images.githubusercontent.com/40606399/127745069-7c627c06-506f-46ea-8798-00346e5e5306.png">
<img width="276" alt="Screen Shot 2021-07-31 at 11 38 15 AM" src="https://user-images.githubusercontent.com/40606399/127745070-bbef34b9-26d6-4c75-849e-8da66b595fc0.png">
<img width="300" alt="Screen Shot 2021-07-31 at 11 37 59 AM" src="https://user-images.githubusercontent.com/40606399/127745071-1a9d83e0-1a8c-4fbb-85bf-fcf645f52d3d.png">
<img width="374" alt="Screen Shot 2021-07-31 at 11 37 56 AM" src="https://user-images.githubusercontent.com/40606399/127745072-e693150d-8418-49e9-b164-e58a0922ed40.png">

https://user-images.githubusercontent.com/40606399/127745142-94120d4c-7192-4cce-8091-65cc3de65ea1.mov


## Acceptance Criteria
The component should render specific elements according to the following specifications:
- An `<input class="add-item" />` element which the user can use to add items to the list. This input field should listen for Enter keydown events (the test suite triggers the onKeyDown event handler specifically) to add the current contents (if nonempty) to the list. After adding an item, the input box should be cleared.
- A `<button class="sort-direction">` element which the user can click to change the direction of the sort. Initially, the button should display text such as the ⬇️ emoji or the text down. When changed to a descending sort, the button should change to a ⬆️ emoji (or text such as up). The test suite will only test that pushing the sort-direction button toggles between two nonempty strings when clicked rather than checking that the string matches something in particular, so pick a string or icon that carries the most semantic meaning to you.
- A `<button class="clear-list">` element which the user can click to clear the list as well as any contents in the input box (essentially reverting to the component's default state). Use any text you'd like for this button.
- An `<ul class="items-list">` element, which should contain a series of <li> elements that represent the sorted list contents.


## contributors

[KimJ Manansala](https://github.com/KimjManansala)

