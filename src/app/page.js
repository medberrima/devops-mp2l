import React from 'react';

const Page = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}h${currentDate.getMinutes()}`;


  // unused variable
  // const unusedVariable = 'This is not used';


  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1>Mon Projet DevOps</h1>
        <p>Suivi de l&apos;évolution de mon projet DevOps.</p>
      </header>

      <section style={styles.contentSection}>
        <h2>Description</h2>
        <p>
          Ce projet DevOps vise à automatiser et améliorer les processus de développement et de déploiement.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>Page 15 - mohamed - {formattedDate} - {formattedTime}</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    color: '#333',
  },
  header: {
    textAlign: 'center', 
    marginBottom: '20px',
  },
  contentSection: {
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center', 
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
    fontSize: '14px',
  }
};

export default Page;
