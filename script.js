const form = document.getElementById("predictionForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const attendance = Number(document.getElementById("attendance").value);
  const previous = Number(document.getElementById("previous").value);
  const assignment = Number(document.getElementById("assignment").value);
  const internal = Number(document.getElementById("internal").value);
  const study = Number(document.getElementById("study").value);

  // Phase 2 prototype prediction logic.
  // This is a transparent weighted model for demonstration.
  const studyScore = Math.min((study / 8) * 100, 100);

  const academicAverage =
    previous * 0.40 +
    assignment * 0.20 +
    internal * 0.20 +
    attendance * 0.20;

  const prediction = Math.round(
    academicAverage * 0.75 +
    studyScore * 0.15 +
    attendance * 0.10
  );

  let performance, risk, recommendation;

  if (prediction >= 80) {
    performance = "Excellent Performance";
    risk = "LOW RISK";
    recommendation = "The student is performing strongly. Maintain regular study habits and attendance.";
  } else if (prediction >= 65) {
    performance = "Good Performance";
    risk = "LOW RISK";
    recommendation = "The student is on a positive track. Continue consistent study and improve weaker subjects.";
  } else if (prediction >= 50) {
    performance = "Needs Improvement";
    risk = "MEDIUM RISK";
    recommendation = "Increase study time, improve attendance and focus on assignments and internal assessments.";
  } else {
    performance = "At Risk";
    risk = "HIGH RISK";
    recommendation = "The student may need academic support. Improve attendance, study consistency and assessment scores.";
  }

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = prediction + "%";
  document.getElementById("performance").textContent = performance;
  document.getElementById("risk").textContent = risk;
  document.getElementById("summary").textContent =
    "The prediction is based on the academic and study information entered above.";

  document.getElementById("studentResult").textContent = name;
  document.getElementById("attendanceResult").textContent = attendance + "%";
  document.getElementById("academicResult").textContent = Math.round(academicAverage) + "%";
  document.getElementById("studyResult").textContent = study + " hours/day";
  document.getElementById("recommendation").textContent = recommendation;

  document.getElementById("result").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
