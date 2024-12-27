import React from 'react';

const Page = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}h${currentDate.getMinutes()}`;

  return (
    <div>
      Page 3 - {formattedDate} - {formattedTime}
    </div>
  );
};

export default Page;
