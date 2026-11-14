import type { CSSProperties } from 'react';

export type TravelDay = {
  id: string;
  dateLabel: string;
  areaLabel: string;
};

type Props = {
  days: TravelDay[];
  selectedId: string;
  onSelect: (id: string) => void;
  label?: string;
};

/** Presentation-only reference component. Fill it with the new traveller's trip data. */
export function DaySelector({ days, selectedId, onSelect, label = '選擇旅程日期' }: Props) {
  const count = Math.max(1, Math.min(days.length, 7));
  const style = { '--tm-day-count': count } as CSSProperties;

  return (
    <div className="tm-day-selector" role="tablist" aria-label={label} data-long={days.length > 7} style={style}>
      {days.map((day, index) => (
        <button
          key={day.id}
          type="button"
          className="tm-day-tab"
          role="tab"
          aria-selected={selectedId === day.id}
          onClick={() => onSelect(day.id)}
        >
          <small className="tm-day-tab__index">DAY {index + 1}</small>
          <b className="tm-day-tab__date">{day.dateLabel}</b>
          <span className="tm-day-tab__label">{day.areaLabel}</span>
        </button>
      ))}
    </div>
  );
}
