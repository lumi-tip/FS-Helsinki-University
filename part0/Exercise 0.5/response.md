sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document (Status Code: 304 Not Modified)
    deactivate server

    Note right of browser: The content is manipulated with JavaScript that is running in the browser

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ] (Status Code: 200 OK)
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes (details of how the function work in spa.js)