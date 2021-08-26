document.addEventListener('DOMContentLoaded', e => {
  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };

  function delegateEvent(parentElement, selector, eventType, callback) {
    if (!parentElement || !parentElement instanceof Element) {
      return undefined
    }

    parentElement.addEventListener(eventType, e => {
      let validElements = [].slice.call(parentElement.querySelectorAll(selector))
      if (validElements.includes(e.target)) {
        callback(e)
      }
    })
    return true
  }
  

  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  const newP = document.createElement('P');
  const newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);

  // scenario 1: - passed
  //  console.log(delegateEvent(element1, 'p', 'click', callback))

  // scenario 2: - passed 
  // console.log(delegateEvent(element2, 'p', 'click', callback))

  // scenario 3:
  // console.log(delegateEvent(element2, 'h1', 'click', callback))

  // scenario 4: 
  // console.log(delegateEvent(element3, 'h1', 'click', callback))

  // scenario 5:
  // console.log(delegateEvent(element3, 'aside p', 'click', callback))

  // scenario 6:
  console.log(delegateEvent(element2, 'p', 'click', callback))
})




