sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes "Hello" in the input and clicks save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: {"msg": "note created"}, (Status Code: 201 Created)
    deactivate server

    Note right of browser: Browser sends a Content-Type: application/json like this {content: "Hello", date: "created date"}
    Note left of server: The server does not request a redirect, the browser stays on the same page and does not send any more HTTP requests
