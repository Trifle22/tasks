const fetchUrl = (url) => {
  console.log(`fetching ${url}...`);
}

const debounce = (callback, delay) => {
  let timer = null;
  return ((...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  })
}



const fetching = debounce(fetchUrl, 1000);

fetching('1')
fetching('2')
fetching('3')
fetching('4')