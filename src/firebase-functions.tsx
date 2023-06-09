import { app } from "./firebase-config";
import { getFunctions, httpsCallable } from "firebase/functions"

const functions = getFunctions(app);

const downloadVideo = httpsCallable(functions, "youtubeDownload")
const saveVideo = httpsCallable(functions, "videoDownload")

export { downloadVideo, saveVideo }