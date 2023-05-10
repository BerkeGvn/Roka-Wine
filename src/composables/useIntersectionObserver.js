
function intersectionHandler(entry, element) {
  const options = {
    threshold: 0.7
  }
  const pageObserver = new IntersectionObserver(([entry]) => {
    element.value = entry.isIntersecting
  }, options)
  pageObserver.observe(entry)

}

export default intersectionHandler