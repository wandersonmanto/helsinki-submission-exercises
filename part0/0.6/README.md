

sequenceDiagram newNote SPA

    participant browser
    participant server

    1 new_note_spa
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status Code: 201 Created
    deactivate server

    Note rigth of server: Dessa vez o servidor responde com o código de status 201.

    Note right of browser: O formulário não possui atributos action ou method para definir como e onde enviar os dados de entrada.
    O gerenciador de evento chama imediatamente o método e.preventDefault() para evitar o tratamento padrão do envio do formulário e o servidor não requisita um redirecionamento e o navegador fica na mesma página e não envia mais requisições HTTP.

    
    