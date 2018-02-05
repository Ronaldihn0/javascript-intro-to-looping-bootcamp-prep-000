function doWhileLoop(array) {
do {array.pop();
}
while (array.length > 0 && maybeTrue());
return array;
}