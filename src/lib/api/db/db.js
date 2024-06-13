import axios from "axios";

export const db = axios.create({
  baseURL: "https://jolly-polarized-opportunity.glitch.me",
});
