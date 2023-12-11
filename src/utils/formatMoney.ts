export const formatMoney = (money: number): string =>
  money
    .toString()
    .split('')
    .reduceRight((acc: string[], curr) => {
      const length = acc[acc.length - 1]?.length;
      if (length !== undefined && length < 3) {
        acc[acc.length - 1] = curr + acc[acc.length - 1];
      } else {
        acc.push(curr);
      }

      return acc;
    }, [] as string[])
    .reverse()
    .join(',');
