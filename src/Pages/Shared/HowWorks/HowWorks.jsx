

const HowWorks = () => {
    return (
        <div style={styles.container}>
      <h2 style={styles.heading}>How It Works</h2>
      <p style={styles.text}>
        Welcome to JSAcademy! Follow these steps to get started:
      </p>
      <ol style={styles.list}>
        <li>Create an account by clicking on the "Sign Up" button at the top right of the page.</li>
        <li>Verify your email to complete the registration process.</li>
        <li>Log in with your new account to access your dashboard.</li>
        <li>Browse through our list of services and select the one that suits your needs.</li>
        <li>Once selected, follow the prompts to complete the process.</li>
        <li>If you need help, visit the "Help" section or contact support.</li>
      </ol>
      <p style={styles.text}>
        It's that simple! If you have any questions, feel free to reach out to our customer support team.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  list: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginLeft: '20px',
  },
};


export default HowWorks;