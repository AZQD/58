let props = {
  a: 1,
  b: 2,
  history: {}
};

console.log('初始props：', props);
const { history, ...otherProps } = props;
console.log('不传history, 只传递props：', otherProps);