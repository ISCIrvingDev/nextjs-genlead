const ATTEMPTS_KEY = "count";
const MAX_ATTEMPTS = 5;

export const attemptService = {
  getAttempts(): number {
    if (typeof window === "undefined") return 0;
    const count = localStorage.getItem(ATTEMPTS_KEY);
    return count ? parseInt(count, 10) : 0;
  },

  incrementAttempts(): number {
    if (typeof window === "undefined") return 0;
    const current = this.getAttempts();
    const newCount = current + 1;
    localStorage.setItem(ATTEMPTS_KEY, newCount.toString());
    return newCount;
  },

  hasReachedLimit(): boolean {
    return this.getAttempts() >= MAX_ATTEMPTS;
  },

  getRemainingAttempts(): number {
    return Math.max(0, MAX_ATTEMPTS - this.getAttempts());
  },

  resetAttempts(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(ATTEMPTS_KEY);
  },
};
