const DailyData = (props) => {
  const { data } = props;
  const { temp } = data;
  const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(data.dt * 1000);
  return (
    <div className="bg-white bg-opacity-20 px-3 py-2 rounded-xl">
      <p className="text-3xl">{daysArr[date.getDay()]}</p>
      <div className="flex flex-col text-xl">
        <span className="whitespace-nowrap flex items-center">
          {(temp.min - 273.15).toFixed(2)}&deg;
        </span>
        <span>{(temp.max - 273.15).toFixed(2)}&deg;</span>
      </div>
    </div>
  );
};

const WeeklyData = (props) => {
  const { weeklyData } = props;

  return (
    <div className="my-5">
      <p className="text-3xl">Weekly Forecast</p>

      <div className="flex-shrink-0 flex gap-2 overflow-scroll no-scrollbar my-2">
        {weeklyData
          ? weeklyData.map((data) => <DailyData data={data} key={data.dt} />)
          : undefined}
      </div>
    </div>
  );
};

export default WeeklyData;
