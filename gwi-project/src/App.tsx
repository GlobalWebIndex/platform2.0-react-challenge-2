import Layout from "./components/Layout"
import { css } from "@emotion/css"
import { Base } from "./routes/Base"

function App() {
  return (
    <div className={styles.container}>
      <Layout>
        <Base />
      </Layout>
    </div>
  )
}

const styles = {
  container: css`
    text-align: center;
    height: 100%;
    display: flex;
    flex: 1;
    background-color: var(--background);
  `,
}
export default App
