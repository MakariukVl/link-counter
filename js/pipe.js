function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  );
}

const pipe = (value, ...funcs) => {
  let result = value;
  funcs.forEach((func, i) => {
    if (isFunction(func)) {
      result = func(result);
    } else {
      throw new TypeError(
        `Provided argument at position ${i} is not a function!`
      );
    }
  });

  return result;
};

const replaceUnderscoreWithSpace = value => value.replace(/_/g, ' ');
const capitalize = value =>
  value
    .split(' ')
    .map(val => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ');
const appendGreeting = value => `Hello, ${value}!`;

try {
  const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');
  alert(error);
} catch (e) {
  alert(e.message);
}

try {
  const result = pipe(
    'john_doe',
    replaceUnderscoreWithSpace,
    capitalize,
    appendGreeting
  );
  alert(result);
} catch (e) {
  alert(e.message);
}
