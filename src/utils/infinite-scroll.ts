export const infiniteScroll = (
  fetchFunction: Function,
  elementRef: HTMLElement
): void =>
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fetchFunction()
    }
  }).observe(elementRef)
