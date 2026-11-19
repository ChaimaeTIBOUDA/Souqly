// Une application web = une fonction (requête, réponse)
export function app(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    res.end(
      "<!DOCTYPE html><html lang='fr'><title>Souqly</title><h1>Souqly arrive bientôt</h1></html>"
    );

  } else if (req.url === "/api/statut") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      application: "Souqly",
      etat: "en construction"
    }));

  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain; charset=utf-8"
    });
    res.end("Page introuvable");
  }
}