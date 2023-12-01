const formatDateTime = (dateTimeString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Date(dateTimeString).toLocaleString('en-US', options);
};

export default formatDateTime;