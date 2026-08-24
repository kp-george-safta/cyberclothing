import styles from '@/styles/Home.module.css'

export default function Login() {
  // Task 1: Create Login Screen
  //  https://pro.chakra-ui.com/components/application/authentication
  //  Use MUI Input elemnts https://mui.com/material-ui/react-table/

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Login &mdash; edit&nbsp;
          <code className={styles.code}>app/backend/login/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <h1>Sign in</h1>
      </div>
    </main>
  )
}
