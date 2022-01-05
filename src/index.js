module.exports = function reverse (n) {
  if ( n > 0){
  const str = n + '';
  const xr = str.split('').reverse().join('');
  resu = xr;
  } else {
    str = (n * -1) + '';
    xr = str.split('').reverse().join('');
    resu = xr;
  }
  return resu;
}