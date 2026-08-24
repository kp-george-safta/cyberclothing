import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          CyberGhost Clothing &mdash; edit&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <h1>CyberGhost Clothing</h1>
      </div>

      <div className={styles.grid}>
        <Link href="/backend" className={styles.card}>
          <h2>
            Backend <span>-&gt;</span>
          </h2>
          <p>Product administration for the store.</p>
        </Link>

        <Link href="/backend/login" className={styles.card}>
          <h2>
            Login <span>-&gt;</span>
          </h2>
          <p>Sign in to the backend.</p>
        </Link>

        <a
          href="/api/products"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Products API <span>-&gt;</span>
          </h2>
          <p>Route handler serving the product list.</p>
        </a>

        <a
          href="/api/vendors"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Vendors API <span>-&gt;</span>
          </h2>
          <p>Route handler serving the vendor list.</p>
        </a>
      </div>
    </main>
  )
}
