export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
   interface CalendarDay {
    date: string;
    isNowMonth: boolean;
    isToday: boolean;
    isHoliday: boolean;
    isSelectDay: boolean;
    schedules: Schedule[];
  }

  interface Schedule {
    id: number,
    date: string,
    content: string
    state: boolean,
    edit: boolean
  }
}
