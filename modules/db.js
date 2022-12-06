export function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZmxkbWFmd3Boa2N3aGx6anphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NjIsImV4cCI6MTk4MjE3NDc2Mn0.l3sYxXCkSkt9TbAeza3b4hMi-tBgh0Gh1h0SMuvYzts";

  const url = "https://refldmafwphkcwhlzjza.supabase.co";

  fetch(url + "rest/v1/Marsmusik", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZmxkbWFmd3Boa2N3aGx6anphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NjIsImV4cCI6MTk4MjE3NDc2Mn0.l3sYxXCkSkt9TbAeza3b4hMi-tBgh0Gh1h0SMuvYzts",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlZmxkbWFmd3Boa2N3aGx6anphIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NjIsImV4cCI6MTk4MjE3NDc2Mn0.l3sYxXCkSkt9TbAeza3b4hMi-tBgh0Gh1h0SMuvYzts",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  })
    .then()
    .then();
}
