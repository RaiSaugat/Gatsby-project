import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Page</h1>
      <p>
        Here is my twitter{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/rai_saugat58"
        >
          @rai_saugat58
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
