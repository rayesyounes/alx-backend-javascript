export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [x, y] of map.entries()) {
    if (y === 1) map.set(x, 100);
  }
  return map;
}
