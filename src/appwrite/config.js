const config = {
  url: String(import.meta.env.VITE_APPWRITE_URL),
  projectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  collectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
};
export default config;
