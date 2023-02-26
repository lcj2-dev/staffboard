import { useEffect, useState } from 'react';
import { DateTime } from '../../../typescript/interfaces';
import { parseDate } from '../../../utils';

interface Props {
  hideTime?: boolean;
  hideDate?: boolean;
}

export const DateTimeWidget = ({ hideTime, hideDate }: Props): JSX.Element => {
  const [date, setDate] = useState<DateTime>({ ...parseDate(new Date()) });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const parsedDate = parseDate(new Date());
      setDate({ ...date, ...parsedDate });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      {!hideDate && date.date} - {!hideTime && date.time}
    </span>
  );
};
