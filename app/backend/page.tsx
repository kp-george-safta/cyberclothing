import styles from '@/styles/Home.module.css'

//  Task 1: Create Produts Tabel
//  https://react.pixelstrap.com/multikart-admin/products/physical/sub-category
//  https://mui.com/material-ui/react-table/ use MUI
//  Add button, https://mui.com/material-ui/react-dialog that opens a dialog upon onClikcEvent

export default function Backend() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Backend &mdash; edit&nbsp;
          <code className={styles.code}>app/backend/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <h1>Products</h1>
      </div>
    </main>
  )
}
