import { NextResponse } from "next/server";
import trainees, { Trainee } from "../../data/trainees";

export async function GET() {
  return NextResponse.json(trainees);
}

export async function POST(request: Request) {
  try {
    const newTrainee: Trainee = await request.json();

    // Input validation here
    if (!newTrainee.email || !newTrainee.password || !newTrainee.fullName) {
      return new Response("Invalid data. All fields are required.", {
        status: 400,
      });
    }

    // Check if the email already exists or not
    const emailExists = trainees.some(
      (trainee: Trainee) => trainee.email === newTrainee.email
    );
    if (emailExists) {
      return new Response("Email already exists.", { status: 409 });
    }

    // Create a new trainee here
    const trainee: Trainee = {
      id: trainees.length + 1, // Generate a new ID
      email: newTrainee.email,
      password: newTrainee.password, // Note: Don't store plain-text passwords in production!
      fullName: newTrainee.fullName,
    };

    // Add the new trainee to the array
    trainees.push(trainee);

    // Return a success response
    return new Response(JSON.stringify(trainee), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating trainee:", error);
    return new Response("Internal server error.", { status: 500 });
  }
}
