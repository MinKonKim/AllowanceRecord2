import RecordItem from "./RecordItem";

const RecordList = ({ filteredRecords }) => {
  return (
    <ul>
      {filteredRecords.map((record) => {
        return <RecordItem key={record.id} record={record} />;
      })}
    </ul>
  );
};

export default RecordList;
