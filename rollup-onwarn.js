export function onWarn(message) {
  if ( /Use of eval is strongly discouraged/.test(message) )
    return;
  console.error(message);
}
