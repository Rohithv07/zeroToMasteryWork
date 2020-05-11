function reverseStringRecursive(str) {
  if (str == "")
    return "";
  return reverseStringRecursive(str.substr(1))+str.charAt(0);
}

reverseStringRecursive("hello");