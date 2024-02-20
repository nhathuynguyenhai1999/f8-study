export const data = [
  {
    id: 1,
    title: 'FREE DELIVERY WORLDWIDE',
    sub: 'On order over $100',
    icon: 'car-outline',
  },
  {
    id: 2,
    title: 'UP TO 20% OFF COSY LAYERS',
    sub: 'Lorem ipsum dolor sit amet',
    icon: 'cloud-upload-outline',
  },
  {
    id: 3,
    title: 'BUY 1 GET 1 FREE',
    sub: 'On order over $100',
    icon: 'gift-outline',
  },
];

var low = 0,
  high = n - 1;

while (low <= high) {
  var mid = (high - low) / 2;
  if (arr[mid] === value) return mid;
  else if (arr[mid] < value) low = mid + 1;
  else high = mid - 1;
}

return -1;
