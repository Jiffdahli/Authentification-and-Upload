# Task 01 - Theory

Add your answers below the questions in this file. For example: 

```
- Question 0: What command is used to create an empty file in the terminal?
- Answer: `touch filename.txt`
```

If you are unsure of an answer, write about what you know about the topic or what you tried to solve it.

## Questions

- Question 1: With a REST API, what kind of operation would a `POST /api/articles/` normally do?
- Answer: 
            Deutsch:
            POST /api/articles/ erstellt einen neuen Artikel.
            Nichts anderes.

            English:
            POST /api/articles/ creates a new article.
            Nothing else.

- Question 2: What is the difference between a PUT and a PATCH request?
- Answer:
            Deutsch:
            PUT ersetzt die gesamte Ressource.
            PATCH ändert (updatet) nur die angegebenen Teile der Ressource.

            English:
            PUT replaces the entire resource.
            PATCH updates only the specified parts of the resource.

- Question 3: What kind of HTTP status codes start with 4? Give an example and explanation of two such status codes.
- Answer: 
            Deutsch:
            HTTP-Statuscodes mit 4xx bedeuten Clientfehler.

            Beispiele:
            400 Bad Request: Die Anfrage ist fehlerhaft oder unvollständig.
            404 Not Found: Die angefragte Ressource existiert nicht.

            English:
            HTTP status codes starting with 4xx indicate client errors.

            Examples:
            400 Bad Request: The request is malformed or incomplete.
            404 Not Found: The requested resource does not exist.

- Question 4: What does `app.use(express.json())` do?
- Answer: 
            Deutsch:
            app.use(express.json()) aktiviert Middleware, die JSON-Daten aus dem Request-Body automatisch einliest und in req.body verfügbar macht.

            English:
            app.use(express.json()) enables middleware that automatically parses JSON data from the request body and makes it available in req.body.

- Question 5: What is the difference between authentication and authorization?
- Answer:
            Deutsch:
            Authentication prüft, wer eine Person ist.
            Authorization prüft, was diese Person tun darf.

            English:
            Authentication verifies who a person is.
            Authorization verifies what that person is allowed to do.

- Question 6: In EJS, what is the difference between `<%= foo %>` and `<%# foo %>`?
- Answer: 
            Deutsch:
            <%= foo %> gibt den Wert von foo im HTML aus.
            <%# foo %> ist ein Kommentar und wird komplett ignoriert.

            English:
            <%= foo %> outputs the value of foo into the HTML.
            <%# foo %> is a comment and is completely ignored.

- Question 7: Why does CORS exist?
- Answer:
            Deutsch:
            CORS existiert, um Browser davor zu schützen, Daten von fremden Domains ohne Erlaubnis zu laden. Es verhindert unerlaubten Zugriff und schützt Benutzer vor Angriffen wie Cross-Site Request Forgery.
            Zwischen Servern selbst ist keine CORS-Beschränkung aktiv — Server können immer frei miteinander kommunizieren; CORS betrifft ausschließlich Browser.

English:
            CORS exists to protect browsers from loading data from other domains without permission. It prevents unauthorized access and protects users from attacks like cross-site request forgery.
            There are no CORS restrictions between servers — servers can always communicate freely; CORS applies only to browsers.

- Question 8: How are cookies passed between client and server?
- Answer:
            Deutsch:
            Cookies werden über HTTP-Header übertragen.
            Der Server setzt sie mit Set-Cookie, und der Client schickt sie bei jeder passenden Anfrage automatisch im Cookie-Header zurück.

            English:
            Cookies are sent through HTTP headers.
            The server sets them using Set-Cookie, and the client automatically returns them on each matching request in the Cookie header.

- Question 9: Explain what a JWT is.
- Answer: 
            Deutsch:
            Ein JWT (JSON Web Token) ist ein kompaktes, digital signiertes Token, das verwendet wird, um Benutzer sicher zu authentifizieren. Es besteht aus Header, Payload (z. B. User-ID) und Signatur, und kann vom Client gespeichert und bei jeder Anfrage mitgeschickt werden.

            English:
            A JWT (JSON Web Token) is a compact, digitally signed token used for secure user authentication. It contains a header, payload (e.g., user ID), and a signature, and can be stored by the client and sent with each request.

- Question 10: What is the difference between encryption and hashing?
- Answer:
            Deutsch:
            Verschlüsselung kann wieder entschlüsselt werden und dient dazu, Daten vertraulich zu übertragen.
            Hashing ist nicht umkehrbar und dient dazu, Daten eindeutig zu prüfen, z. B. Passwörter sicher zu speichern.

            English:
            Encryption can be decrypted and is used to keep data confidential during transfer.
            Hashing is not reversible and is used to uniquely verify data, such as securely storing passwords.
