const btn = document.querySelector('.btn');

const debounce = (fn) => {
  let timeoutID;
  return () => {
    console.log(timeoutID);
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      // console.log('you clicked me');
      fn();
    }, 2000);
  };
};

btn.addEventListener(
  'click',
  debounce(() => {
    console.log('you clicked me');
  })
);

// delay logic
// so it runs 2s after last click
// setTimeout returns id, wich pass into clearTimeout
// 1 debounce por cada 2s
