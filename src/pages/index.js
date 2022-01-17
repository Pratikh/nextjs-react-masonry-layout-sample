import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Test
      </title>
    </Head>
  </>
);

Dashboard.getLayout = (page) => (
  <>
    {page}
  </>
);

export default Dashboard;
