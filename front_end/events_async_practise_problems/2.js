// Without changing the behavior of the following code, remove the call to event.stopPropagation 
// and refactor the result.

document.querySelector('html').addEventListener('click', () => {
  let container = document.querySelector('#container')
  
  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
});

// If the container does not contain the event target,
//  The event target must exist outside of the container,
// Therefore, the containers style must change.

// `Node.contains()` checks whether the passed in argument node,
// is the calling node or one of its decendents. 
// It returns true if it is, otherwise false.

// function isInPageBody(exampleNode) {
//   document.body.contains(exampleNode)  
// }
