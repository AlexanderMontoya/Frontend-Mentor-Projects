export const environment = {
    production: true,
    apiUrl: 'https://example.com/api',
    // Otras variables de entorno...
    firebaseConfig:  {
      apiKey: "YOUR_API_KEY", // Cambia las credenciales de Firebase para el entorno de producción
      authDomain: "YOUR_AUTH_DOMAIN",
      databaseURL: "YOUR_DATABASE_URL",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    }
  };