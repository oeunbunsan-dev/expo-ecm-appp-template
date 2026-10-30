interface AppConfig {
  apiUrl: string;
}

export const ENV: AppConfig = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5000/api',
};
