import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Booking route
  app.post("/api/bookings", async (req: Request, res: Response) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const newBooking = await storage.createBooking(bookingData);
      
      res.status(201).json({
        success: true,
        message: "Booking request received successfully!",
        data: newBooking
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        console.error("Booking error:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  // Contact message route
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const newContact = await storage.createContact(contactData);
      
      res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        data: newContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationError.message
        });
      } else {
        console.error("Contact error:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  // Get all bookings (admin only in a real app, but included for testing)
  app.get("/api/bookings", async (_req: Request, res: Response) => {
    try {
      const bookings = await storage.getAllBookings();
      res.status(200).json({
        success: true,
        count: bookings.length,
        data: bookings
      });
    } catch (error) {
      console.error("Get bookings error:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later."
      });
    }
  });

  // Get all contact messages (admin only in a real app, but included for testing)
  app.get("/api/contacts", async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      res.status(200).json({
        success: true,
        count: contacts.length,
        data: contacts
      });
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
