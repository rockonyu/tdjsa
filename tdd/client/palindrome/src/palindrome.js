/**
 * 若傳入的字串反轉後與自身完全相同，則回傳 true
 */
function isPalindrome(phrase) {
  if (phrase === undefined) {
    throw new Error("Invalid argument");
  }
  return (
    phrase.trim().length > 0 &&
    phrase
      .split("")
      .reverse()
      .join("") === phrase
  );
}
