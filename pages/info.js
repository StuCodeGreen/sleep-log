import { gql } from '@apollo/client';
import { client } from '../apollo-client';
import SleepLog from '../components/SleepLog';
import Link from 'next/link'

export default function Info({sleeplog}){
  console.log("getServerSideProps-", sleeplog)
  return (
    <div>
       <Link href="/">
          <a>Home</a>
        </Link>
    <SleepLog data={sleeplog}/>

    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      sleeplog: data.logs,
    },
 };
}