import React from 'react';
import { RangeCalendar, useClickOutside } from '@heathmont/moon-datepicker';
import { rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-core';

const Example = () => {
  const [initialStartDate, setStartDate] = React.useState(
    new Date('September 17, 2020 03:24:00')
  );
  const [initialEndDate, setEndDate] = React.useState(
    new Date('September 27, 2020 03:24:00')
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, hasClickedOutside] = useClickOutside();

  return (
    <div
      style={{ height: rem(600), width: '100%', position: 'relative' }}
      test-id="wrapper"
      onClick={() => {}}
    >
      <div style={{ position: 'relative', display: 'inline-block' }} ref={ref}>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          {initialStartDate &&
            (initialStartDate as any)?.toLocaleDateString('en-GB')}
          {` - `}
          {initialEndDate &&
            (initialEndDate as any)?.toLocaleDateString('en-GB')}
        </Button>
        {isOpen && (
          <RangeCalendar
            startDate={initialStartDate}
            endDate={initialEndDate}
            onDateChange={({ startDate, endDate }) => {
              setStartDate(startDate as Date);
              setEndDate(endDate as Date);
            }}
            setIsOpen={setIsOpen}
            config={{
              weekStartsOn: 1,
              withHoursAndMinutes: true,
              withFooter: true,
              withPeriodList: true,
            }}
            hasClickedOutside={hasClickedOutside}
          />
        )}
      </div>
    </div>
  );
};

export default Example;
