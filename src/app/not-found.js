import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Image
          src="/404-image.png"
          alt="404 Not Found"
          width={400}
          height={300}
        />
        <h1 style={styles.title}>404 - Page Not Found</h1>
        <p style={styles.description}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/" style={styles.link}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    padding: '0 1rem',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    margin: '1rem 0',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    color: '#666',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
    fontSize: '1rem',
    border: '1px solid #0070f3',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  },
};
