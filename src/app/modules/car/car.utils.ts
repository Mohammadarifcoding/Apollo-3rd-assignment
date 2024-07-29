const CalculateMoney = (data: any, endTime: string) => {
    console.log(data);
  
    const startDateTimeStr = `${data?.date}T${data?.startTime}:00.000Z`;
    const endDateTimeStr = `${new Date().toISOString().split('T')[0]}T${endTime}:00.000Z`;
  
    const formattedStartTime = new Date(startDateTimeStr).toISOString();
    const formattedEndTime = new Date(endDateTimeStr).toISOString();
  
    console.log(formattedEndTime, formattedStartTime);
  };
  
  export default CalculateMoney;
  