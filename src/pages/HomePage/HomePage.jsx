import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Graph from "../../components/HomePageComponents/Graph";
import MonthSelector from "../../components/HomePageComponents/MonthSelector";
import RecordForm from "../../components/HomePageComponents/RecordForm";
import RecordList from "../../components/HomePageComponents/RecordList";
const HomePage = () => {
  //Redux
  // Redux - useSelector
  const { records, selectedMonth } = useSelector((state) => ({
    records: state.records,
    selectedMonth: state.selectedMonth,
  }));
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    //월에 따른 필터
    const newRecords = records.filter((record) => {
      if (selectedMonth) {
        return record.date.startsWith(selectedMonth.value);
      }
      return true;
    });

    setFilteredRecords(newRecords);
  }, [records, selectedMonth]);

  return (
    <div>
      <RecordForm />
      <MonthSelector />
      {/* 필터링된 Records를 props로 내린다. */}
      <Graph filteredRecords={filteredRecords} />
      <RecordList filteredRecords={filteredRecords} />
    </div>
  );
};

export default HomePage;
