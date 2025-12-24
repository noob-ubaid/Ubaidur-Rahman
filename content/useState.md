---
title: "useState: The Tale of Mutable Madness"
description: Explore the eerie world of `useState` in React, where components struggle to hold onto their precious state and every click can change destiny. A humorous adventure for React enthusiasts.
date: 26 mar 2024
tags: ["code", "react", "hooks", "useState"]
slug: useState
---

# useState: The Tale of Mutable Madness

In the land of React, components live peacefully… until they need to remember something. Enter `useState`, the keeper of mutable treasures.  

## The Curse of Changing Values

A simple counter starts its journey:

```jsx
const [counter, setCounter] = useState(0);

<button onClick={() => setCounter(counter + 1)}>
  Increase Counter
</button>
<p>Current count: {counter}</p>
