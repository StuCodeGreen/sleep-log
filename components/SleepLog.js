import { useQuery, gql } from '@apollo/client';

const MY_QUERY_QUERY = gql`
  query MyQuery {
    logs {
      bed_time
      created_at
      id
      note
      updated_at
      wakeup_time
    }
  }
`;

export default function SleepLog({data}){

  return (
    <div>
     {data.map(log => {
       return log.note;
     })}

    </div>
  )
}