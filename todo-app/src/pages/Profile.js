function Profile() {
  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <h2>User Profile</h2>
      <div style={{ 
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>Account Information</h3>
        <p><strong>Name:</strong> Atharv</p>
        <p><strong>Email:</strong> hello@gmail.com</p>
        <p><strong>Member since:</strong> November 2004</p>
      </div>
    </div>
  );
}

export default Profile;