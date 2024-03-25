sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes "Hello" in the input and clicks save

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL Redirection, (Status Code: 302 Found)
    deactivate server

    Note left of server: The server creates a new note object and adds it to an array called notes.
    Note left of server: The server requests the browser to make a new HTTP GET request to the address /exampleapp/notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document, (Status Code: 304 Not Modified)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file, (Status Code: 304 Not Modified)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file, (Status Code: 304 Not Modified)
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ] (Status Code: 200 OK)
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes