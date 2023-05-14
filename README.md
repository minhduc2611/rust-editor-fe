#### Clear Code Structure
```plantuml
@startuml
Component --> Hook: uses
Hook --> Store: uses
Hook --> Hook: uses
Store --> ApiService: uses
ApiService --> Helpers : uses
Store --> Helpers : uses
Hook --> Helpers : uses
@enduml
```

```mermaid
journey
	title Me studying for exams
	section Exam is announced
		I start studying: 1: Me
		Make notes: 2: Me
		Ask friend for help: 3: Me, Friend
		We study togther: 5: Me, Friend
	section Exam Day
		Syllabys is incomplete: 2: Me
		Give exam: 1: Me, Friend
	section Result Declared
		I passed the exam with destinction!: 5: Me
		Friend barely gets passing marks: 2: Friend
```

```mermaid
sequenceDiagram
    participant dotcom
    participant iframe
    participant viewscreen
    dotcom->>iframe: loads html w/ iframe url
    iframe->>viewscreen: request template
    viewscreen->>iframe: html & javascript
    iframe->>dotcom: iframe ready
    dotcom->>iframe: set mermaid data on iframe
    iframe->>iframe: render mermaid
```
#### Slash ở đằng sau BaseURL
NEXT_PUBLIC_MAIN_ENDPOINT=https://5bf0b7fb0756d20013119887.mockapi.io/api/dealers/search/


Quy ước URL KHONG có slash ở đằng sau thường thể hiện đây là 1 resource duy nhất 
Quy ước URL có slash ở đằng sau thể hiện 1 directory hoặc 1 resouce collection
Đây là lí do tại sao baseURL cần có slash ở đằng sau.
ví dụ:
- "http://example.com/mydirectory/example.html"  là 1 resource duy nhất 
- "http://example.com/products/" là một resource collection ( vì theo sau có thể là id, hoặc path khác). chẳng hạn "http://example.com/products/100" hoặc "http://example.com/products/blabla"

