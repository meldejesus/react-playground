
render
- function that transforms a React component into a virtual DOM (a JS rep of DOM)
- it redners your component in into a container (a div attached to document.body);
- it updates the interanl state of screen so that the query functions point to the specific component instance rendered
- the bind


screen
- console.log(screen) to see all the query functions (ie, getByText);
- allows you to search for elements within your component
- these functions are UNBOUND until you pass your component into the app: render(<App>)
- this binding  is scoped to a specific test block
- You can also destructure because render and screen are tightly coupled

const { getByRole } = render(My component);
const button = getByRole(button)
