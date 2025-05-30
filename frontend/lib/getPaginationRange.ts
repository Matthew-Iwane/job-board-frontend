export function getPaginationRange(currentPage: number, totalPages: number, windowSize = 6): number[] {
    const half = Math.floor(windowSize / 2);
  
    let start = Math.max(currentPage - half, 1);
    let end = start + windowSize - 1;
  
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - windowSize + 1, 1);
    }
  
    const range: number[] = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  
    return range;
  }
  