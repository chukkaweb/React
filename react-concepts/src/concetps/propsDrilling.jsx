// Props Drilling is a pattern in React where you pass data (props) from a parent component down to a deeply nested child component through intermediate components

// # Problems with Props Drilling
// 1. Boilerplate Code: Intermediate components have to pass down props even if they do not use them.
// 2. Maintenance: Adding or changing props requires updating multiple components, increasing the potential for errors.
// 3. Performance: Passing props through multiple levels of components can lead to unnecessary re-renders.

// # Solutions to Props Drilling
// 1. Context API: Provides a way to pass data through the component tree without having to pass props down manually at every level.
// 2. State Management Libraries: Libraries like Redux, MobX, or Zustand can manage state globally, avoiding the need to pass props down multiple levels.
// 3. Component Composition: Using composition patterns to organize components in a way that minimizes prop passing
