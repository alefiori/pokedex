export const infiniteScroll = (
  fetchFunction: Function,
  elementRef: HTMLElement
) => {
  if (elementRef) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchFunction()
      }
    })
    observer.observe(elementRef)
  }
}
