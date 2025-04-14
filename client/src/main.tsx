import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

// Add custom font links
const fontLinks = document.createElement("div");
fontLinks.innerHTML = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
`;
document.head.appendChild(fontLinks);

// Set title
document.title = "Royal Rides India - Luxury Car Rentals for Weddings & Events";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <App />
    <Toaster />
  </>
);
