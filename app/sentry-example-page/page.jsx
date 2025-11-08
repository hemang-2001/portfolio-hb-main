"use client";

import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Sentry Removed</title>
        <meta name="description" content="Sentry integration removed from this project." />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "14px 0" }}>Sentry integration removed</h1>
        <p>This example page has been disabled because Sentry was removed from the project.</p>
      </main>
    </div>
  );
}
