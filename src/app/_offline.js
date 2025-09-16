export default function OfflinePage() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>You’re Offline</h1>
        <p style={styles.message}>
          It looks like you don’t have an internet connection.  
          Please reconnect to continue using the app.
        </p>
      </div>
    );
  }
  
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.2rem",
      color: "#555",
    },
  };
  