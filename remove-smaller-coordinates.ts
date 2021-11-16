class Solution {
  solve(coordinates: Array<Array<number>>): Array<Array<number>> {
    const copy = [...coordinates];
    copy.sort((a, b) => {
      if (a[0] === b[0]) {
        return b[1] - a[1];
      }

      return b[0] - a[0];
    });

    const result: Array<Array<number>> = [copy[0]];

    for (let i = 1; i < copy.length; i++) {
      let shouldSkip = false;

      for (let k = i - 1; k >= 0; k--) {
        if (this.shouldRemoveInterval(copy[k], copy[i])) {
          shouldSkip = true;
          break;
        }
      }

      if (!shouldSkip) {
        result.push(copy[i]);
      }
    }

    return coordinates.filter((coordinate) => result.includes(coordinate));
  }

  shouldRemoveInterval(base: Array<number>, toRemove: Array<number>): boolean {
    return toRemove[0] <= base[0] && toRemove[1] <= base[1];
  }
}

export { Solution };
