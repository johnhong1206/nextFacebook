import Head from "next/head";
import styled from "styled-components";
import Feeds from "../components/Feeds";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Loading from "../components/Loading";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

  if (!user) return <Login />;
  return (
    <div>
      <Head>
        <title>Zong Hong Next Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AppBody>
        <Sidebar />
        <Feeds />
      </AppBody>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
`;
