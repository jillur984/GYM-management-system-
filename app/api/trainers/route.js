export async function POST(request) {
  try {
    const trainer = await request.json();

    if (!trainer.trainingName || !trainer.assignBy || !trainer.date) {
      return new Response("Invalid data", { status: 400 });
    }

    const newTrainer = {
      id: trainers.length + 1,
      trainingName: trainer.trainingName,
      assignBy: trainer.assignBy,
      date: trainer.date,
    };

    trainers.push(newTrainer);

    return new Response(JSON.stringify(newTrainer), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error occurred:", error); // Log the error
    return new Response("Server error", { status: 500 });
  }
}
